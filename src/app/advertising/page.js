


import SideBar from '@/components/modules/SideBar';
import AdvertisingPage from '@/components/templates/AdvertisingPage'


export default function page({searchParams}) {
  return (
    <div>
 
      <AdvertisingPage searchParams={searchParams} />
    </div>
  );
}
