'use server';

import { cookies } from 'next/headers';

export const getAllProjects = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
      next: { tags: ['projects'] },
    });

    return await res.json();
  } catch (err: any) {
    throw new Error(err);
  }
};

export const getSingleProject = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/projects/${id}`,
      {
        next: { tags: ['PROJECTS'] },
      }
    );

    return await res.json();
  } catch (err: any) {
    throw new Error(err);
  }
};

export const createProject = async (payload: FormData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects}`, {
      method: 'POST',
      headers: {
        Authorization: (await cookies()).get('accessToken')!.value,
      },
      body: payload,
      next: { tags: ['PROJECTS'] },
    });
    return await res.json();
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updateMyProject = async (id: string, payload: FormData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/projects/${id}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: (await cookies()).get('accessToken')!.value,
        },
        body: payload,
        next: { tags: ['PROJECTS'] },
      }
    );
    return await res.json();
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deleteProject = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/projects/${id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: (await cookies()).get('accessToken')!.value,
        },
        next: { tags: ['PROJECTS'] },
      }
    );
    return await res.json();
  } catch (error: any) {
    throw new Error(error);
  }
};
