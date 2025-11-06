// import { getMe } from '@/services/authService';

// async function Profile() {
//   const res = await getMe();
//   console.log(res);

//   return (
//     <div>
//       <p>
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, sapiente.
//         Nemo mollitia eaque exercitationem blanditiis alias asperiores, quo
//         totam commodi voluptatum harum culpa aliquid. Ex dolore facilis
//         voluptatibus incidunt nesciunt?
//       </p>
//     </div>
//   );
// }
// export default Profile;

'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Shield,
  Globe,
  BadgeCheck,
} from 'lucide-react';
import { IUser } from '@/types';
import Image from 'next/image';
import Cta from '@/components/ui/core/Cta';
import avatar from '@/assets/avatar.png';

function Profile({ data }: { data: IUser }) {
  const profileRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Profile image animation
      gsap.fromTo(
        imageRef.current,
        { scale: 0 },
        { scale: 1, duration: 1.5, ease: 'back.out(1.7)' }
      );

      // Cards stagger animation
      gsap.fromTo(
        cardsRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.5,
        }
      );
    }, profileRef);

    return () => ctx.revert();
  }, []);

  const addToCardsRef = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in-progress':
        return 'bg-yellow-500';
      case 'active':
        return 'bg-green-500';
      case 'pending':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div ref={profileRef} className="min-h-screen  relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 rounded-md"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 ">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-4 text-5xl font-bold">Profile</div>
          <p className="text-xl font-semibold">
            Manage your account information
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Profile Card */}
          <div className="rounded-md overflow-hidden">
            <div className="p-8">
              {/* Profile Header */}
              <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
                {/* Profile Image */}
                <div ref={imageRef} className="relative">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-2xl overflow-hidden">
                    <Image
                      width={200}
                      height={200}
                      src={(data?.profileImg as string) || avatar}
                      alt={`${data?.fullName}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r bg-primary text-white rounded-full p-2 shadow-lg">
                    <BadgeCheck className="w-6 h-6 " />
                  </div>
                </div>

                {/* Profile Info */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                    <h2 className="text-3xl md:text-4xl font-bold ">
                      {`${data.name.firstName} ${data.name.lastName}`}
                    </h2>
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/50 rounded-full text-sm font-medium">
                      {data?.user?.role}
                    </span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-4 ">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">
                        Joined {formatDate(data?.createdAt)}
                      </span>
                    </div>
                    <div
                      className={`flex items-center gap-1 ${getStatusColor(
                        data?.user?.status as string
                      )} px-3 py-1 rounded-full`}
                    >
                      <div className="w-2 h-2 rounded-full bg-current"></div>
                      <span className="text-sm  capitalize">
                        {data?.user?.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Edit Button */}
                <Cta
                  hasLink={true}
                  path="/dashboard/update-profile"
                  text="Edit Profile"
                />
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Personal Information */}
                <div
                  ref={addToCardsRef}
                  className="rounded-md p-6 transition-all duration-300 shadow-md group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <User className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold ">Personal Info</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 ">
                      <BadgeCheck className="w-4 h-4 text-green-400" />
                      <span>Verified Account</span>
                    </div>
                    <div className="flex items-center gap-3 ">
                      <Shield className="w-4 h-4 text-purple-400" />
                      <span className="capitalize">
                        {data?.user?.method} Authentication
                      </span>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div
                  ref={addToCardsRef}
                  className="rounded-md shadow-md p-6 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <Mail className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold ">Contact</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 ">
                      <Mail className="w-4 h-4 text-green-400" />
                      <span>{data?.email}</span>
                    </div>
                    <div className="flex items-center gap-3 ">
                      <Phone className="w-4 h-4 text-green-400" />
                      <span>{data?.phoneNumber}</span>
                    </div>
                  </div>
                </div>

                {/* Location Information */}
                <div
                  ref={addToCardsRef}
                  className="rounded-md shadow-md p-6 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-orange-500/20 rounded-lg">
                      <MapPin className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-xl font-semibold ">Location</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 ">
                      <MapPin className="w-4 h-4 text-orange-400" />
                      <span>
                        {data?.address?.city}, {data?.address?.country}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 ">
                      <Globe className="w-4 h-4 text-orange-400" />
                      <span>ZIP: {data?.address?.zipCode}</span>
                    </div>
                  </div>
                </div>

                {/* Account Status */}
                <div
                  ref={addToCardsRef}
                  className="rounded-md shadow-md p-6 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <Shield className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold ">Account Status</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="">Role</span>
                      <span className="text-purple-400 font-semibold capitalize">
                        {data?.user?.role}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="">Status</span>
                      <span
                        className={`capitalize ${
                          data?.user?.status === 'in-progress'
                            ? 'text-yellow-400'
                            : 'text-green-400'
                        }`}
                      >
                        {data?.user?.status}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="">Deleted</span>
                      <span
                        className={
                          data?.user?.isDeleted
                            ? 'text-red-400'
                            : 'text-green-400'
                        }
                      >
                        {data?.user?.isDeleted ? 'Yes' : 'No'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* System Information */}
                <div
                  ref={addToCardsRef}
                  className="rounded-md p-6 shadow-md transition-all duration-300 group md:col-span-2 lg:col-span-1"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gray-500/20 rounded-lg">
                      <Calendar className="w-6 h-6 " />
                    </div>
                    <h3 className="text-xl font-semibold ">System</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="">Created</span>
                      <span className=" text-sm">
                        {formatDate(data?.createdAt)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="">Updated</span>
                      <span className=" text-sm">
                        {formatDate(data?.updatedAt)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="">User ID</span>
                      <span className=" text-sm font-mono">
                        {data?.user?._id.slice(-8)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
