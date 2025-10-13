'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { FieldValues } from 'react-hook-form';

export const getAllEmployees = async (
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
      `${process.env.NEXT_PUBLIC_BASE_API}/employees?limit=${limit}&page=${page}&${params}`,
      {
        next: { tags: ['employees'] },
      }
    );

    return await res.json();
  } catch (err: any) {
    return Error(err);
  }
};

export const getSingleEmployee = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/employees/${id}`,
      {
        next: { tags: ['employees'] },
      }
    );

    return await res.json();
  } catch (err: any) {
    return Error(err);
  }
};

export const createEmployee = async (payload: FormData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/users/create-employee`,
      {
        method: 'POST',
        headers: {
          Authorization: (await cookies()).get('accessToken')?.value || '',
        },
        body: payload,
        next: { tags: ['employees'] },
      }
    );

    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const changeEmployeeStatus = async (payload: FieldValues) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/employees/change-status`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: (await cookies()).get('accessToken')?.value || '',
        },
        body: JSON.stringify(payload),
        next: { tags: ['employees'] },
      }
    );

    return await res.json();
  } catch (err: any) {
    return Error(err);
  }
};

export const updateEmployee = async (id: string, payload: FormData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/employees/${id}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: (await cookies()).get('accessToken')?.value || '',
        },
        body: payload,
        next: { tags: ['employees'] },
      }
    );

    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export async function revalidateEmployees() {
  revalidateTag('employees');
}
