import { CONTACTS } from '@/constants';
import Link from 'next/link';
import React from 'react';

export default function Contact() {
  return (
    <div className="flex flex-col space-y-2 pt-6 pb-3">
      <div className="flex flex-col">
        <span className="text-snow text-xs font-bold">Email Address</span>
        <span className="text-xs text-gray-600">
          <Link href={`mailto:${CONTACTS.EMAIL}`}>{CONTACTS.EMAIL}</Link>
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-snow text-xs font-bold">Phone</span>
        <span className="text-xs text-gray-600">
          <Link href={`tel:${CONTACTS.PHONE}`}>{CONTACTS.PHONE}</Link>
        </span>
      </div>
    </div>
  );
}
