// app/dashboard/admin/create-employee/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler, Path, Controller } from 'react-hook-form';
import {
  ChevronLeft,
  ChevronRight,
  User,
  MapPin,
  Cake,
  Calendar,
  DollarSign,
  CircleAlert,
  Building,
} from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

// Components
import Label from '@/components/form/Label';
import Select from '@/components/form/Select';
import Input from '@/components/form/input/InputField';
import ImageUpload from '@/components/ui/core/ImageUpload';
import Cta from '@/components/ui/core/Cta';
import Container from '@/components/ui/core/Container';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import { IEmployeeForm } from '@/types/employee';
import {
  DEPARTMENT_OPTIONS,
  DESIGNATION_OPTIONS,
  GENDER_OPTIONS,
  SKILLS_OPTIONS,
} from '@/components/modules/employee/employee.const';
import MultipleSelector from '@/components/ui/core/MultipleSelector';
import { createEmployee } from '@/services/employee';

export default function CreateEmployeeForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IEmployeeForm>({
    defaultValues: {
      role: 'employee',
      gender: 'Other',
      skills: [{ value: '', label: '' }],
      address: {
        country: 'Bangladesh',
        city: 'Dhaka',
        zipCode: '1205',
      },
    },
  });

  // Step Navigation
  const handleNext = async () => {
    let fieldsToValidate: Path<IEmployeeForm>[] = [];

    if (step === 1) {
      fieldsToValidate = [
        'name.firstName',
        'name.lastName',
        'email',
        'phoneNumber',
        'gender',
      ];
    }
    if (step === 2) {
      fieldsToValidate = [
        'department',
        'designation',
        'salary',
        'dateOfBirth',
        'joiningDate',
      ];
    }
    if (step === 3) {
      fieldsToValidate = ['address.city', 'address.country', 'profileImg'];
    }

    const valid = await trigger(fieldsToValidate);
    if (valid) setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  // Form Submission
  const onSubmit: SubmitHandler<IEmployeeForm> = async (data) => {
    const { profileImg, ...rest } = data;

    const formData = new FormData();

    // Append main data
    formData.append(
      'data',
      JSON.stringify({
        ...rest,
        skills: data.skills
          .map((skill) => skill.value)
          .filter((skill) => skill !== ''),
      })
    );

    // Append profile image
    if (data.profileImg && data.profileImg[0]) {
      formData.append('file', data.profileImg[0]);
    }

    const toastId = toast.loading('Creating employee...');
    try {
      const res = await createEmployee(formData);

      if (res.success) {
        toast.success('Employee created successfully!', { id: toastId });
        router.push('/dashboard/employee');
        reset();
      }
    } catch (error) {
      toast.error('Failed to create employee', { id: toastId });
      console.error('Error creating employee:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Container>
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard/admin/employees"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Employees
          </Link>
          <SecondaryHeading>Add New Employee</SecondaryHeading>
          <p className="text-gray-600 mt-2">
            Add a new employee to your organization
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              {[1, 2, 3].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step >= stepNumber
                        ? 'bg-primary text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {stepNumber}
                  </div>
                  {stepNumber < 3 && (
                    <div
                      className={`w-12 h-1 ${
                        step > stepNumber ? 'bg-primary' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <span className="text-sm text-gray-500">
              Step {step} of {totalSteps}
            </span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6">
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="e.g., John"
                      register={register('name.firstName', {
                        required: 'First name is required',
                        minLength: {
                          value: 2,
                          message: 'First name must be at least 2 characters',
                        },
                        maxLength: {
                          value: 20,
                          message: 'First name cannot exceed 20 characters',
                        },
                      })}
                      error={errors.name?.firstName}
                    />
                  </div>

                  <div>
                    <Label htmlFor="lastName">
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="e.g., Doe"
                      register={register('name.lastName', {
                        required: 'Last name is required',
                        minLength: {
                          value: 2,
                          message: 'Last name must be at least 2 characters',
                        },
                        maxLength: {
                          value: 20,
                          message: 'Last name cannot exceed 20 characters',
                        },
                      })}
                      error={errors.name?.lastName}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="e.g., john.doe@company.com"
                    register={register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    error={errors.email}
                  />
                </div>

                <div>
                  <Label htmlFor="phoneNumber">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="number"
                    id="phoneNumber"
                    placeholder="e.g., +8801712345678"
                    register={register('phoneNumber', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^\+?[\d\s-()]+$/,
                        message: 'Invalid phone number format',
                      },
                    })}
                    error={errors.phoneNumber}
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="gender">Gender</Label>
                    <Select
                      id="gender"
                      options={GENDER_OPTIONS}
                      register={register('gender')}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Professional Information */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="department">
                      Department <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      id="department"
                      options={DEPARTMENT_OPTIONS.filter(
                        (el) => el.value !== 'All Departments'
                      )}
                      register={register('department', {
                        required: 'Department is required',
                      })}
                      error={errors.department}
                    />
                  </div>

                  <div>
                    <Label htmlFor="designation">
                      Designation <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      id="designation"
                      options={DESIGNATION_OPTIONS.filter(
                        (el) => el.value !== 'All Roles'
                      )}
                      register={register('designation', {
                        required: 'Designation is required',
                      })}
                      error={errors.designation}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="salary" className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-500" />
                    Salary <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="number"
                    id="salary"
                    placeholder="e.g., 50000"
                    register={register('salary', {
                      required: 'Salary is required',
                      pattern: {
                        value: /^\d+$/,
                        message: 'Salary must be a number',
                      },
                    })}
                    error={errors.salary}
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="dateOfBirth"
                      className="flex items-center gap-2"
                    >
                      <Cake className="w-4 h-4 text-pink-500" />
                      Date of Birth
                    </Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      register={register('dateOfBirth')}
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="joiningDate"
                      className="flex items-center gap-2"
                    >
                      <Calendar className="w-4 h-4 text-blue-500" />
                      Joining Date
                    </Label>
                    <Input
                      id="joiningDate"
                      type="date"
                      register={register('joiningDate')}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Skills <span className="text-red-500">*</span>
                  </label>

                  <Controller
                    name="skills"
                    control={control}
                    rules={{
                      required: 'Please select at least 3 skills',
                      validate: (value) =>
                        value.length > 3 ||
                        'Please select at least three skills',
                    }}
                    render={({ field }) => (
                      <MultipleSelector
                        value={field.value}
                        onChange={field.onChange}
                        defaultOptions={SKILLS_OPTIONS}
                        placeholder="Select technologies..."
                        emptyIndicator="No technologies found."
                        creatable
                        maxSelected={20}
                        onMaxSelected={() => {
                          toast.warning('Maximum skills reached!');
                        }}
                      />
                    )}
                  />

                  {errors.skills && (
                    <p className="bg-red-100/90 rounded-2xl text-red-800 text-sm mt-1 inline-flex px-1 py-0.5 gap-0.5">
                      {errors.skills.message ||
                        "Skills field couldn't be empty!"}
                      <CircleAlert className="text-red-800" size={20} />
                    </p>
                  )}

                  <p className="text-xs text-gray-500">
                    Start typing to search or create new skills. Maximum 20
                    skills allowed.
                  </p>
                </div>
              </div>
            )}

            {/* Step 3: Address & Profile */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="city" className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-red-500" />
                      City
                    </Label>
                    <Input
                      id="city"
                      placeholder="e.g., Dhaka"
                      register={register('address.city')}
                    />
                  </div>

                  <div>
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      placeholder="e.g., 1205"
                      register={register('address.zipCode')}
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="country"
                      className="flex items-center gap-2"
                    >
                      <MapPin className="w-4 h-4 text-blue-500" />
                      Country
                    </Label>
                    <Input
                      id="country"
                      placeholder="e.g., Bangladesh"
                      register={register('address.country')}
                    />
                  </div>
                </div>

                <div>
                  <Label className="flex items-center gap-2 mb-4">
                    <User className="w-4 h-4" />
                    Profile Image
                  </Label>
                  <ImageUpload
                    label="Upload Profile Image"
                    multiple={false}
                    onChange={(files) => {
                      if (
                        Array.isArray(files) &&
                        files.length > 0 &&
                        files[0] instanceof File
                      ) {
                        setValue('profileImg', files as File[], {
                          shouldValidate: true,
                        });
                        trigger('profileImg');
                      }
                    }}
                  />

                  <Input type="hidden" register={register('profileImg')} />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 mt-6 border-t border-gray-200">
              <div>
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="flex items-center gap-2 px-6 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>
                )}
              </div>

              <div>
                {step < totalSteps ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors cursor-pointer"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <Cta
                    text="Create Employee"
                    renderIcon={false}
                    isSubmitting={isSubmitting}
                    submittingText="Creating..."
                    type="submit"
                  />
                )}
              </div>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
}
