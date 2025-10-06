'use client';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler, Controller, Path } from 'react-hook-form';
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Image as ImageIcon,
  Globe,
  DollarSign,
  Star,
  Zap,
  CircleAlert,
  Trash2,
} from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

// Components

import Label from '@/components/form/Label';
import Select from '@/components/form/Select';
import Checkbox from '@/components/form/input/Checkbox';
import ImageUpload from '@/components/ui/core/ImageUpload';
import Cta from '@/components/ui/core/Cta';
import Container from '@/components/ui/core/Container';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import {
  IPrebuiltProject,
  IPrebuiltProjectForm,
} from '@/types/prebuiltProjects';
import Input from '@/components/form/input/InputField';
import { useFieldArray } from 'react-hook-form';

import { updatePrebuiltProject } from '@/services/prebuiltProjectService';
import MultipleSelector, {
  Option,
} from '@/components/ui/core/MultipleSelector';

// Options
const statusOptions = [
  { value: 'completed', label: 'Completed' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'draft', label: 'Draft' },
  { value: 'archived', label: 'Archived' },
];

const categoryOptions = [
  { value: 'Portfolio', label: 'Portfolio' },
  { value: 'E-commerce', label: 'E-commerce' },
  { value: 'Blog', label: 'Blog' },
  { value: 'SaaS', label: 'SaaS' },
  { value: 'Landing Page', label: 'Landing Page' },
  { value: 'Dashboard', label: 'Dashboard' },
];

const budgetOptions = [
  { value: 'Free', label: 'Free' },
  { value: '$100-$500', label: '$100 - $500' },
  { value: '$500-$1000', label: '$500 - $1,000' },
  { value: '$1000-$5000', label: '$1,000 - $5,000' },
  { value: '$5000+', label: '$5,000+' },
];

const technologyOptions: Option[] = [
  { value: 'react', label: 'React' },
  { value: 'nextjs', label: 'Next.js' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'tailwind', label: 'Tailwind CSS' },
  { value: 'nodejs', label: 'Node.js' },
  { value: 'mongodb', label: 'MongoDB' },
  { value: 'express', label: 'Express' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'python', label: 'Python' },
  { value: 'django', label: 'Django' },
  { value: 'flutter', label: 'Flutter' },
  { value: 'react-native', label: 'React Native' },
  { value: 'firebase', label: 'Firebase' },
  { value: 'aws', label: 'AWS' },
  { value: 'docker', label: 'Docker' },
  { value: 'graphql', label: 'GraphQL' },
  { value: 'postgresql', label: 'PostgreSQL' },
  { value: 'mysql', label: 'MySQL' },
];

export default function UpdatePreProjectForm({
  project,
}: {
  project: IPrebuiltProject;
}) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const defaultValues = useMemo(() => {
    if (!project) {
      return { features: [{ value: '' }] };
    }
    return {
      ...project,
      features: project.features.map((feature) => ({ value: feature })),
      technologies: project.technologies.map((tech) => ({
        value: tech,
        label: tech,
      })),
    };
  }, [project]);

  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<IPrebuiltProjectForm>({
    defaultValues,
  });

  const {
    fields: featureFields,
    append: addFeature,
    remove: removeFeature,
  } = useFieldArray({
    control,
    name: 'features',
  });

  const featured = watch('featured', false);

  // Step Navigation
  const handleNext = async () => {
    let fieldsToValidate: Path<IPrebuiltProject>[] = [];

    if (step === 1) {
      fieldsToValidate = [
        'title',
        'slug',
        'category',
        'shortDescription',
        'fullDescription',
      ];
    }
    if (step === 2) {
      fieldsToValidate = ['technologies', 'features', 'price', 'budget'];
    }
    if (step === 3) {
      fieldsToValidate = ['liveLink', 'results.rating', 'results.pageLoadTime'];
    }

    const valid = await trigger(fieldsToValidate);
    if (valid) setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  // Form Submission
  const onSubmit: SubmitHandler<IPrebuiltProjectForm> = async (data) => {
    const cleanData = {
      ...data,
      features: data.features.map((feature) => feature.value),
      technologies: data.technologies
        .map((tech) => tech.value)
        .filter((t) => t),
    };

    delete (cleanData as any).createdAt;
    delete (cleanData as any).updatedAt;

    const toastId = toast.loading('Updating project...');

    try {
      const formData = new FormData();

      // Append main data, converting technologies back to an array of strings
      formData.append('data', JSON.stringify(cleanData));

      // Append thumbnail
      if (data.images.thumbnail && data.images.thumbnail[0]) {
        formData.append('thumbnail', data.images.thumbnail[0]);
      }

      // Append gallery images
      if (data.images.gallery) {
        Array.from(data.images.gallery as File[]).forEach((file) => {
          formData.append('gallery', file);
        });
      }

      const res = await updatePrebuiltProject(project._id, formData);

      console.log(res);

      if (res.success) {
        toast.success('Project updated successfully!', { id: toastId });
        router.push('/dashboard/admin/preprojects');
        // No need to call reset() here as we are navigating away
      }
    } catch (error) {
      toast.error('Failed to update project', { id: toastId });
      console.error('Error updating project:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Container>
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/prebuilt-projects"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          <SecondaryHeading>Update {project.title} Project</SecondaryHeading>
          <p className="text-gray-600 mt-2">
            Update prebuilt project to your portfolio
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
            {/* Step 1: Basic Information */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="title">
                    Project Title <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="title"
                    placeholder="e.g., Portfolio Pro"
                    register={register('title', {
                      required: 'Project title is required',
                      minLength: {
                        value: 3,
                        message: 'Title must be at least 3 characters',
                      },
                    })}
                    error={errors.title}
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="category">
                      Category <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      id="category"
                      options={categoryOptions}
                      register={register('category', {
                        required: 'Category is required',
                      })}
                      error={errors.category}
                    />
                  </div>

                  <div>
                    <Label htmlFor="budget">
                      Budget Range <span className="text-red-500">*</span>
                    </Label>

                    <Select
                      id="budget"
                      options={budgetOptions}
                      register={register('budget', {
                        required: 'budget is required',
                      })}
                      error={errors.budget}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="status">Status</Label>
                    <Select
                      id="status"
                      options={statusOptions}
                      register={register('status', {
                        required: 'Status is required',
                      })}
                      error={errors.status}
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <Checkbox
                      id="featured"
                      register={register('featured')}
                      value={featured}
                    />
                    <Label htmlFor="featured" className="!mb-0 cursor-pointer">
                      Featured Project
                    </Label>
                  </div>
                </div>

                <div>
                  <Label htmlFor="shortDescription">
                    Short Description <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="shortDescription"
                    placeholder="A brief description of your project..."
                    register={register('shortDescription', {
                      required: 'Short description is required',
                      minLength: {
                        value: 10,
                        message: 'Description must be at least 10 characters',
                      },
                    })}
                    error={errors.shortDescription}
                  />
                </div>

                <div>
                  <Label htmlFor="fullDescription">
                    Full Description <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="textarea"
                    id="fullDescription"
                    rows={5}
                    placeholder="Detailed description of your project..."
                    register={register('fullDescription', {
                      required: 'Full description is required',
                      minLength: {
                        value: 20,
                        message: 'Description must be at least 20 characters',
                      },
                    })}
                    error={errors.fullDescription}
                  />
                </div>
              </div>
            )}

            {/* Step 2: Features & Technologies */}
            {step === 2 && (
              <div className="space-y-6">
                {/* Features */}
                <div>
                  <Label className="mb-4">Features</Label>

                  <div className="space-y-3">
                    {featureFields.map((field, index) => {
                      const fieldError = errors.features?.[index]?.value;
                      return (
                        <div key={field.id} className="space-y-2">
                          <div className="flex items-center gap-3">
                            <input
                              type="text"
                              placeholder={`Feature ${index + 1}`}
                              {...register(`features.${index}.value`, {
                                required: 'Feature cannot be empty',
                              })}
                              className={`flex-1 focus:border-primary  bg-transparent text-gray-800  w-full px-2 py-2 border border-grey/20 rounded-md focus:outline-none shadow-primary/10 hover:shadow-md focus:ring-4 focus:ring-primary/10 ${
                                fieldError
                                  ? 'border-red-500'
                                  : 'border-gray-300 focus:border-primary'
                              }`}
                            />

                            {featureFields.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeFeature(index)}
                                className="hover:text-red-600 text-red-500 transition duration-300 cursor-pointer"
                                title="Remove"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            )}
                          </div>

                          {fieldError && (
                            <p className="bg-red-100/90 rounded-2xl text-red-800 text-sm mt-1 inline-flex px-1 py-0.5 gap-0.5">
                              {fieldError?.message}

                              <CircleAlert className="text-red-800" size={20} />
                            </p>
                          )}
                        </div>
                      );
                    })}

                    <button
                      type="button"
                      onClick={() => addFeature({ value: '' })}
                      className="inline-flex items-center gap-2 px-3 py-1 text-sm text-primary border border-primary rounded-md hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      Add Feature
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Technologies <span className="text-red-500">*</span>
                  </label>

                  <Controller
                    name="technologies"
                    control={control}
                    rules={{
                      required: 'Please select at least 3 technology',
                      validate: (value) =>
                        value.length >= 3 ||
                        'Please select at least three technology',
                    }}
                    render={({ field }) => (
                      <MultipleSelector
                        {...field}
                        value={field.value}
                        onChange={field.onChange}
                        defaultOptions={technologyOptions}
                        placeholder="Select technologies..."
                        emptyIndicator="No technologies found."
                        creatable
                        maxSelected={10}
                        onMaxSelected={(maxLimit) => {
                          toast.warning('Maximum technology reached!');
                        }}
                      />
                    )}
                  />

                  {errors.technologies && (
                    <p className="bg-red-100/90 rounded-2xl text-red-800 text-sm mt-1 inline-flex px-1 py-0.5 gap-0.5">
                      {errors.technologies.message ||
                        "Technology field couldn't be empty!"}
                      <CircleAlert className="text-red-800" size={20} />
                    </p>
                  )}

                  <p className="text-xs text-gray-500">
                    Start typing to search or create new technologies. Maximum
                    10 technologies allowed.
                  </p>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="rating" className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      Rating
                    </Label>
                    <Input
                      id="rating"
                      placeholder="e.g., 4.5"
                      register={register('results.rating', {
                        required: 'Rating is required',
                      })}
                      error={errors.results?.rating}
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="pageLoadTime"
                      className="flex items-center gap-2"
                    >
                      <Zap className="w-4 h-4 text-green-500" />
                      Page Load Time
                    </Label>
                    <Input
                      id="pageLoadTime"
                      placeholder="e.g., 1.2s"
                      register={register('results.pageLoadTime', {
                        required: 'Page load time is required',
                      })}
                      error={errors.results?.pageLoadTime}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="price" className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-green-500" />
                      Price <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="price"
                      placeholder="e.g., 0 or 99"
                      register={register('price', {
                        required: 'Price is required',
                        pattern: {
                          value: /^\d+$/,
                          message: 'Price must be a number',
                        },
                      })}
                      error={errors.price}
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="liveLink"
                      className="flex items-center gap-2"
                    >
                      <Globe className="w-4 h-4 text-blue-500" />
                      Live Link
                    </Label>
                    <Input
                      id="liveLink"
                      placeholder="https://your-project.demo.com"
                      type="url"
                      register={register('liveLink', {
                        required: 'Live link is required',
                      })}
                      error={errors.liveLink}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Media Upload */}
            {step === 3 && (
              <div className="space-y-6">
                {/* Thumbnail Upload */}
                <div>
                  <Label className="flex items-center gap-2 mb-4">
                    <ImageIcon className="w-4 h-4" />
                    Thumbnail Image
                  </Label>
                  <ImageUpload
                    label="Upload Thumbnail Image"
                    multiple={false}
                    // onChange={(files) => {
                    //   if (
                    //     Array.isArray(files) &&
                    //     files.length > 0 &&
                    //     files[0] instanceof File
                    //   ) {
                    //     setValue('images.thumbnail', files as File[], {
                    //       shouldValidate: true,
                    //     });
                    //     trigger('images.thumbnail');
                    //   }
                    // }}
                    onChange={(files) => {
                      if (Array.isArray(files) && files.length > 0) {
                        setValue('images.thumbnail', files as File[], {
                          shouldValidate: true,
                        });
                      } else {
                        setValue('images.thumbnail', []);
                      }
                      trigger('images.thumbnail');
                    }}
                    initialImages={
                      project.images.thumbnail
                        ? [project.images.thumbnail as string]
                        : []
                    }
                  />

                  <Input
                    type="hidden"
                    register={register('images.thumbnail', {
                      required: 'A project should have a thumbnail image',
                      validate: {
                        required: (value: string | File[]) => {
                          if (Array.isArray(value)) {
                            return (
                              value.length > 0 ||
                              'Please select a thumbnail image'
                            );
                          }

                          return (
                            value !== '' || 'Please select a thumbnail image'
                          );
                        },
                      },
                    })}
                    error={errors.images?.thumbnail}
                  />
                </div>

                <div className="w-full">
                  <ImageUpload
                    label="Projects Images (Ensure at least 3 Images)"
                    multiple={true}
                    minFiles={3}
                    onChange={(files) => {
                      if (Array.isArray(files) && files.length > 0) {
                        setValue('images.gallery', files as File[], {
                          shouldValidate: true,
                        });
                      } else {
                        //  No files left after removal
                        setValue('images.gallery', []);
                      }
                      trigger('images.gallery');
                    }}
                    initialImages={
                      project.images.gallery
                        ? (project.images.gallery as string[])
                        : []
                    }
                  />

                  <Input
                    type="hidden"
                    register={register('images.gallery', {
                      required: 'Provide at least 3 images',
                      validate: {
                        minImages: (value: any) => {
                          if (Array.isArray(value)) {
                            return (
                              value.length >= 3 || 'Select at least 3 images'
                            );
                          }
                          // If it's already uploaded images (strings), check array length
                          if (
                            Array.isArray(value) &&
                            typeof value[0] === 'string'
                          ) {
                            return (
                              value.length >= 3 || 'Select at least 3 images'
                            );
                          }
                          // Handle FileList
                          if (value instanceof FileList) {
                            return (
                              value.length >= 3 || 'Select at least 3 images'
                            );
                          }
                          return 'Select at least 3 images';
                        },
                      },
                    })}
                    error={errors.images?.gallery}
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 mt-6 ">
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
                    text={isSubmitting ? 'Updating...' : 'Update Project'}
                    renderIcon={false}
                    disabled={isSubmitting}
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
