import Advertising from '@/models/Advertising';
import User from '@/models/User';
import Contect from '@/utils/Conect';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server'


export async function DELETE(req, { params }) {
    const { advertisingId } = await params;
  try {
    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json({ status: 403, message: "  ابتدا وارد شوید " });
    }
    await Contect();
    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json({
        status: 404,
        message: "  کاربر ثبت نام نکرده است ",
      });
    }
    
    const advertising = await Advertising.deleteOne({ _id: advertisingId });
        await advertising.deleteOne();
    return NextResponse.json({
      status: 200,
      message: " آگهی با موفقیت حذف شد  ",
      data: advertising,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ status: 500, message: "server error" });
  }
}
