import DetailPage from "@/components/templates/DetailPage";
import Advertising from "@/models/Advertising";
import Contect from "@/utils/Conect";


export default async function Page({params}) {
     await Contect()
     const {advertisingId}= await params
    const advertisingData=await Advertising.findOne({_id:advertisingId})
  return (
  <DetailPage advertisingData={advertisingData}/>
  )
}
