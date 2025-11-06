'use server';

import { IMail } from '@/types/mail';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

export const getAllMessages = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/mails`, {
      method: 'GET',
      headers: {
        Authorization: (await cookies()).get('accessToken')?.value || '',
      },
      next: { tags: ['MAILS'] },
    });

    return res.json();
  } catch (err: any) {
    throw new Error(err);
  }
};

export const getMyMessage = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/mails/my-mails`,
      {
        method: 'GET',
        headers: {
          Authorization: (await cookies()).get('accessToken')?.value || '',
        },
        next: { tags: ['MAILS'] },
      }
    );

    return res.json();
  } catch (err: any) {
    throw new Error(err);
  }
};

export const createAMessage = async (payload: Partial<IMail>) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/mails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: (await cookies()).get('accessToken')?.value || '',
      },
      body: JSON.stringify(payload),
      next: { tags: ['MAILS'] },
    });

    return res.json();
  } catch (err: any) {
    throw new Error(err);
  }
};

export const deleteAMessage = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/mails/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: (await cookies()).get('accessToken')?.value || '',
      },
      next: { tags: ['MAILS'] },
    });

    if (!res.ok) {
      const errData = await res.json();
      throw new Error(
        errData.message || `Failed to fetch mails: ${res.statusText}`
      );
    }
    return res.json();
  } catch (err: any) {
    throw new Error(err);
  }
};

export async function revalidatedMail() {
  revalidateTag('MAILS');
}
