'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

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

    if (!res.ok) {
      throw new Error(`Failed to fetch employees: ${res.statusText}`);
    }
    return res.json();
  } catch (err: any) {
    throw new Error(err);
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

    if (!res.ok) {
      throw new Error(`Failed to fetch employee: ${res.statusText}`);
    }

    return res.json();
  } catch (err: any) {
    throw new Error(err);
  }
};

export const createPrebuiltProject = async (payload: FormData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/employees`, {
      method: 'POST',
      headers: {
        Authorization: (await cookies()).get('accessToken')?.value || '',
      },
      body: payload,
      next: { tags: ['employees'] },
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(
        errorData.message || `Failed to create employees: ${res.statusText}`
      );
    }

    return res.json();
  } catch (error: any) {
    throw new Error(error);
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

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(
        errorData.message || `Failed to update employees: ${res.statusText}`
      );
    }

    return res.json();
  } catch (error: any) {
    throw new Error(error);
  }
};

export async function revalidatePrebuiltProjects() {
  revalidateTag('employees');
}
