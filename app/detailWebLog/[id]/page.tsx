import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

function Page() {
  return (
    <main>
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-5">
        <article>
       
          <div className="mb-8 flex items-center justify-end gap-2 text-sm text-slate-400">
            <span>خانه</span>
            <span>/</span>
            <span>وبلاگ‌ها</span>
            <span>/</span>
            <span className="text-slate-500">
              راهنمای کامل React Query
            </span>
          </div>

          <header className="text-center">
            <Badge
              variant="default"
              className="mb-5 rounded-lg bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700">
              برنامه نویسی
            </Badge>

            <h1 className="text-3xl font-extrabold text-slate-900">
              راهنمای کامل React Query
            </h1>

            <div className="mt-6 flex items-center justify-center gap-3">
              <Avatar className="h-11 w-11 ">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="علی محمدی"
                />
                <AvatarFallback>ع</AvatarFallback>
              </Avatar>
              <span className="font-medium text-slate-700">
                علی محمدی
              </span>
            </div>


            <div className="mt-5 flex  items-center justify-center gap-5 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <span>◷</span>
                ۵ دقیقه مطالعه
              </span>

              <span className="h-1 w-1 rounded-full bg-slate-300" />

              <span>۱۴ خرداد ۱۴۰۳</span>

              <span className="h-1 w-1 rounded-full bg-slate-300" />

              <span className="flex items-center gap-1.5">
                <span>◉</span>
                1.2K view
              </span>
            </div>
          </header>

          <div className="relative mt-10 aspect-[16/7] w-full overflow-hidden rounded-2xl">
            <Image
              src="/lab.jpg"
              alt="React Query"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 850px"
            />
          </div>

          <section className="prose prose-slate mt-10 max-w-none text-right">
            <h2 className="mb-5 text-2xl font-bold text-slate-900">
              React Query چیست؟
            </h2>

            <p className="text-[16px] leading-9 text-slate-600"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid cupiditate placeat voluptas delectus corrupti alias quam dolore sit repellendus nemo fugit, repudiandae magni totam, vitae, voluptates voluptate officia nostrum blanditiis!
            </p>

          </section>
        </article>
      </div>
    </main>
  )
}

export default Page