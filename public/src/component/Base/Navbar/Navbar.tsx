 "use client" 
import { BookOpen, Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function Navbar() {
    return (
        <> <div className="w-full h-20 p-2 bg-white flex flex-row-reverse justify-between">

            <div className=" flex justify-between">
                <button className="bg-blue-700 text-amber-50 rounded-xl w-36 p-2 flex justify-baseline items-center gap-3.5 flex-row-reverse">
                    <Plus/>افزودن وبلاگ
                </button>
            </div>

            <div className="text-zinc-950 flex gap-5 flex-row-reverse text-xl items-center ">
                <Link href="/dashboard">خانه</Link>
                <Link href="/dashboard">وبلاگ ها</Link>
                <Link href="/dashboard">تماس با ما</Link>
                <Link href="/dashboard">درباره ما</Link>
            </div>

            <div className="flex gap-2 items-center">
                <BookOpen strokeWidth={3} size={60} className="text-blue-700 font-extrabold text-3xl" />
                <span className="text-[#3d3d3d] font-extrabold text-4xl">My Blog</span>
            </div>

        </div>
        </>
    )
}

export default Navbar
