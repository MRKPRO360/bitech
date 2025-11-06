'use client';

import { useState } from 'react';
import { Search, MessageSquare, Mail, Phone, Calendar } from 'lucide-react';
import { IMail } from '@/types/mail';
import formateDate from '@/components/utils/formateDate';
import Input from '@/components/form/input/InputField';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import Para from '@/components/ui/core/Para';

function MyMails({ mails }: { mails: IMail[] }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredmails = mails.filter((mail) => {
    const matchesSearch =
      mail.name.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mail.name.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mail.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mail.subject.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
          <MessageSquare className="w-8 h-8 text-primary" />
          Contact mails
        </h1>
        <Para className="text-gray-600 mt-2">My all feedback</Para>
      </div>

      {/* mails List */}
      {/* Search  */}
      <div className="bg-white rounded-md shadow-sm p-4 mb-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search mails..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* mails Grid */}
      <div className="space-y-3">
        {filteredmails.map((mail) => (
          <div
            key={mail._id}
            className="bg-white rounded-md shadow-sm p-4 cursor-pointer transition-all hover:shadow-md hover:border-primary hover:ring-1 hover:ring-primary tranistion duration-300 "
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-gray-900 font-medium mb-1 line-clamp-1">
                  {mail.subject}
                </p>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {mail.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    <span>{mail.email}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    <span>{mail.phone}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formateDate(mail.createdAt)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyMails;
