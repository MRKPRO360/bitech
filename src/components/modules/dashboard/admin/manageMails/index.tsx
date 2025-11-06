'use client';

import { useState } from 'react';
import {
  Mail,
  Phone,
  User,
  Calendar,
  Search,
  Filter,
  Trash2,
  Star,
  MessageSquare,
} from 'lucide-react';
import { IMail } from '@/types/mail';
import formateDate from '@/components/utils/formateDate';
import Input from '@/components/form/input/InputField';
import Modal from '@/components/ui/core/Modal';
import { toast } from 'sonner';
import { deleteAMessage, revalidatedMail } from '@/services/mailService';

function ManageMails({ mails }: { mails: IMail[] }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [mailToDelete, setMailToDelete] = useState<IMail | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<
    'all' | 'registered' | 'guest'
  >('all');

  const filteredmails = mails.filter((mail) => {
    const matchesSearch =
      mail.name.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mail.name.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mail.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mail.subject.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filterStatus === 'all' ||
      (filterStatus === 'registered' && mail.user) ||
      (filterStatus === 'guest' && !mail.user);

    return matchesSearch && matchesFilter;
  });

  const handleDelete = (mail: IMail) => {
    setMailToDelete(mail);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (!mailToDelete) return;
    const toastId = toast.loading('Deleting Mail...');
    try {
      const res = await deleteAMessage(mailToDelete._id);
      if (res.success) {
        toast.success('Mail deleted successfully.', { id: toastId });
        await revalidatedMail();
      }
    } catch (error: any) {
      toast.error(error.message || 'Failed to delete mail.', {
        id: toastId,
      });
    } finally {
      setShowDeleteModal(false);
      setMailToDelete(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <MessageSquare className="w-8 h-8 text-primary" />
            Contact mails
          </h1>
          <p className="text-gray-600 mt-2">
            Manage and review customer inquiries and feedback
          </p>
        </div>

        {/* mails List */}
        <div>
          {/* Search and Filter */}
          <div className="bg-white rounded-md shadow-sm p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search mails..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  // className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg hover:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Filter */}
              <div className="flex gap-2">
                <button
                  onClick={() => setFilterStatus('all')}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors cursor-pointer ${
                    filterStatus === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <Filter className="w-4 h-4" />
                  All
                </button>
                <button
                  onClick={() => setFilterStatus('registered')}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors cursor-pointer ${
                    filterStatus === 'registered'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <User className="w-4 h-4" />
                  Registered
                </button>
                <button
                  onClick={() => setFilterStatus('guest')}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors cursor-pointer ${
                    filterStatus === 'guest'
                      ? 'bg-orange-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <User className="w-4 h-4" />
                  Guest
                </button>
              </div>
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
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-900">
                        {mail.name.firstName} {mail.name.lastName}
                      </h3>
                      {mail.user ? (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <User className="w-3 h-3 mr-1" />
                          Registered
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                          <User className="w-3 h-3 mr-1" />
                          Guest
                        </span>
                      )}
                    </div>

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

                  <div className="flex items-center gap-1 ml-4">
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <Star className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(mail)}
                      className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {filteredmails.length === 0 && (
              <div className="text-center py-12 bg-white rounded-md shadow-sm">
                <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No mails found</p>
                <p className="text-gray-400 text-sm mt-1">
                  {searchTerm || filterStatus !== 'all'
                    ? 'Try adjusting your search or filter'
                    : 'No contact mails yet'}
                </p>
              </div>
            )}

            <Modal
              title="Confirm Deletion"
              description={
                mailToDelete
                  ? `Are you sure you want to delete ${mailToDelete.subject}? This action cannot be undone.`
                  : 'Are you sure you want to delete this mail?'
              }
              confirmText="Delete"
              onConfirm={confirmDelete}
              open={showDeleteModal}
              onOpenChange={setShowDeleteModal}
            >
              <></>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageMails;
