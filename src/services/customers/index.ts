'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { FieldValues } from 'react-hook-form';

export const getAllCustomers = async (
  page?: string,
  limit?: string,
  query?: { [key: string]: string | string[] | undefined }
) => {
  const params = new URLSearchParams();

  //   if (query?.filter) {
  //     const filterValue = query.filter.toString();
  //   }

  if (query?.searchTerm && query?.searchTerm?.length > 0) {
    params.append('searchTerm', query?.searchTerm?.toString());
  }

  if (query?.sort) {
    params.append('sort', query?.sort?.toString());

    params.append('order', query.order?.toString() || 'desc');
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/customers?limit=${limit}&page=${page}&${params}`,
      {
        method: 'GET',
        headers: {
          Authorization: (await cookies()).get('accessToken')?.value || '',
        },
        next: { tags: ['customers'] },
      }
    );

    return await res.json();
  } catch (err: any) {
    return Error(err);
  }
};

export const getSingleCustomer = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/customers/${id}`,
      {
        method: 'GET',
        headers: {
          Authorization: (await cookies()).get('accessToken')?.value || '',
        },
        next: { tags: ['customers'] },
      }
    );

    return await res.json();
  } catch (err: any) {
    return Error(err);
  }
};

export const changeCustomerStatus = async (payload: FieldValues) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/customers/change-status`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: (await cookies()).get('accessToken')?.value || '',
        },
        body: JSON.stringify(payload),
        next: { tags: ['customers'] },
      }
    );

    return await res.json();
  } catch (err: any) {
    return Error(err);
  }
};

export async function revalidatecustomers() {
  revalidateTag('customers');
}
