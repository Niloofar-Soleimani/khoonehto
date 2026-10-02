


import Addpage from '@/components/templates/Addpage';
import Advertising from '@/models/Advertising';
import Contect from '@/utils/Conect'
import React from 'react'

export  default async function Edit({ params }) {
  const { advertisingId } = await params;
 
  await Contect();
  const advertisingData = await Advertising.findOne({ _id: advertisingId });

  return (
    <Addpage advertisingData={JSON.parse(JSON.stringify(advertisingData))} />
  );
}
