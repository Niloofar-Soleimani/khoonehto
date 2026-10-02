import Advertising from '@/models/Advertising';
import User from '@/models/User';
import Contect from '@/utils/Conect';
import { Types } from 'mongoose';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server'



export async function POST(req) {
   
     const {
       title,
       discriotion,
       phone,
       price,
       category,
       constractionDate,
       rules,
       location,
       realSatet,
       amenities,
     } = await req.json();
    try {
        if(!title || !price || !category || !phone || !location || !realSatet || !discriotion || !constractionDate){
            return NextResponse.json({status:442 , message:"  لطفا تمامی فیلد هارا پر کنید "})
        }
          await Contect()
           const session= await getServerSession(req)
           if(!session){
            return NextResponse.json({status:403 , message : "  ابتدا وارد شوید "})
           }
             const user= await User.findOne({email:session.user.email})
             if(!user){
                return NextResponse.json({status:404, message:  "  کاربر ثبت نام نکرده است "})
             }
               const newadvertisin = await Advertising.create({
                 title,
                 discriotion,
                 phone,
                 price : +price,
                 category,
                 constractionDate,
                 rules,
                 location,
                 realSatet,
                 amenities,userId:new Types.ObjectId(user._id)
               });
                return NextResponse.json({
                  status: 201,
                  message: " آگهی با موفقیت ثبت شد ",
                  data: newadvertisin,
                });
               
    } catch (error) {
        return NextResponse.json({status:500 , message:"server error"})
    }

}

export async function PATCH(req) {
 
  try {
     const {
       _id,
       title,
       discriotion,
       phone,
       price,
       category,
       constractionDate,
       rules,
       location,
       realSatet,
       amenities,
     } = await req.json();
    if (
        !_id ||
      !title ||
      !price ||
      !category ||
      !phone ||
      !location ||
      !realSatet ||
      !discriotion ||
      !constractionDate
    ) {
      return NextResponse.json({
        status: 442,
        message: "  لطفا تمامی فیلد هارا پر کنید ",
      });
    }
    await Contect();
    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json({ status: 403, message: "  ابتدا وارد شوید " });
    }
    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json({
        status: 404,
        message: "  کاربر ثبت نام نکرده است ",
      });
    }
  
  const advertising= await Advertising.findOne({_id})
  if(!user._id.equals(advertising.userId)){
    return NextResponse.json({status:403 , message : "  امکان ویرایش آگهی برای شما وجود ندارد "})
  }
    advertising.title=title;
      advertising.discriotion =discriotion
    advertising.phone =phone
    advertising.price =+price
    advertising.category =category
    advertising.constractionDate =constractionDate
    advertising.rules =rules
    advertising.location =location
    advertising.realSatet =realSatet
    advertising.amenities = amenities;
    advertising.save()
    return NextResponse.json({status:200 , message: " آگهی با موفقیت ویرایش شد "})
  } catch (error) {
    return NextResponse.json({ status: 500, message: "server error" });
  }
}


  export async function POST(params) {
    

    try {
      
    } catch (error) {
      console.log(error);
      
    }
  }