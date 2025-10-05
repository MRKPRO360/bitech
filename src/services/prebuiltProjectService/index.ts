'use server';

import { cookies } from 'next/headers';

export const getAllPrebuiltProjects = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/prebuilt-projects`,
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
