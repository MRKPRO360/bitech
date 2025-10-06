'use server';

import { cookies } from 'next/headers';

export const getAllPrebuiltProjects = async (
  page?: string,
  limit?: string,
  query?: { [key: string]: string | string[] | undefined }
) => {
  const params = new URLSearchParams();

  if (query?.filter) {
    const filterValue = query.filter.toString();
  }

  if (query?.searchTerm && query?.searchTerm?.length > 0) {
    params.append('searchTerm', query?.searchTerm?.toString());
  }

  if (query?.sort) {
    params.append('sort', query?.sort?.toString());

    params.append('order', query.order?.toString() || 'desc');
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/prebuilt-projects?limit=${limit}&page=${page}&${params}`,
      {
        next: { tags: ['prebuilt-projects'] },
      }
    );

    return await res.json();
  } catch (err: any) {
    throw new Error(err);
  }
};

export const getSinglePrebuiltProject = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/prebuilt-projects/${id}`,
      {
        next: { tags: ['prebuilt-projects'] },
      }
    );

    return await res.json();
  } catch (err: any) {
    throw new Error(err);
  }
};

export const createPrebuiltProject = async (payload: FormData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/prebuilt-projects}`,
      {
        method: 'POST',
        headers: {
          Authorization: (await cookies()).get('accessToken')!.value,
        },
        body: payload,
        next: { tags: ['prebuilt-projects'] },
      }
    );
    return await res.json();
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updatePrebuiltProject = async (id: string, payload: FormData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/prebuilt-projects/${id}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: (await cookies()).get('accessToken')!.value,
        },
        body: payload,
        next: { tags: ['prebuilt-projects'] },
      }
    );
    return await res.json();
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deletePrebuiltProject = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/prebuilt-projects/${id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: (await cookies()).get('accessToken')!.value,
        },
        next: { tags: ['prebuilt-projects'] },
      }
    );
    return await res.json();
  } catch (error: any) {
    throw new Error(error);
  }
};
