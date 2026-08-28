import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"


function HeaderPageDetail(props) {
  return (
    <header className="text-center">
            <Badge
              variant="default"
              className="mb-5 rounded-lg bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700">
             {props.category}
            </Badge>

            <h1 className="text-3xl font-extrabold text-slate-900">
             {props.title}
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
  )
}

export default HeaderPageDetail