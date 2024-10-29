import { formateDate } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function UserCard({ user }) {
  const {
    gender,
    picture,
    name,
    email,
    location,
    dob,
    phone,
    cell,
    registered,
  } = user;
  return (
    <div className='max-w-sm flex flex-col items-center rounded overflow-hidden shadow-lg p-6 bg-white'>
      <Image
        src={picture.large}
        width={100}
        height={100}
        className='rounded-full'
        alt={`${name.first} ${name.last}`}
      />
      <div className='text-center mt-4 p-2 border'>
        <h2 className='text-xl font-semibold'>
          {name.title} {name.first} {name.last}
        </h2>
        <Link
          href={`mailto:${email}`}
          className='text-blue-500 hover:underline'
        >
          {email}
        </Link>
        <p className='text-gray-600'>
         {location.street.name}, {location.city}, {location.state}, {location.country}
        </p>
        <p className='text-gray-600'>Birthday: {formateDate(dob.date)}</p>
        <p className='text-gray-600'>Age: {dob.age}</p>
        <p className='text-gray-600'>Gender: {gender}</p>
        <p className='text-gray-600'>Phone: {phone}</p>
        <p className='text-gray-600'>Cell: {cell}</p>
        <p className='text-gray-600'>
          Registered @ {formateDate(registered.date)}
        </p>
      </div>
    </div>
  );
}
