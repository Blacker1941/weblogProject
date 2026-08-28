export default function Form() {
  return (
    <div className="flex flex-col items-center gap-7 m-7">
      <div className="flex flex-col gap-2">
        <label className="text-right font-medium">عنوان مقاله</label>

        <input
          type="text"
          placeholder="عنوان مقاله را وارد کنید"
          className="w-96 h-12 border border-gray-300 rounded-lg px-4 text-right outline-none focus:border-blue-500"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-right font-medium">خلاصه مقاله</label>

        <input
          type="text"
          placeholder="خلاصه‌ای از محتوای مقاله اینجا بنویسید"
          className="w-96 h-12 border border-gray-300 rounded-lg px-4 text-right outline-none focus:border-blue-500"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-right font-medium">آدرس تصویر (URL)</label>

        <input
          type="text"
          placeholder="لینک تصویر شاخص مقاله را وارد کنید"
          className="w-96 h-12 border border-gray-300 rounded-lg px-4 text-right outline-none focus:border-blue-500"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-right font-medium">دسته بندی</label>

        <select
          defaultValue=""
          className="w-96 h-12 border border-gray-300 rounded-lg px-4 text-right outline-none focus:border-blue-500"
        >
          <option value="" disabled>
            دسته بندی را انتخاب کنید
          </option>

          <option value="Frontend">Frontend</option>
          <option value="Next.js">Next.js</option>
          <option value="TypeScript">TypeScript</option>
          <option value="CSS">CSS</option>
          <option value="Redux">Redux</option>
          <option value="React Query">React Query</option>
          <option value="Backend">Backend</option>
          <option value="Node.js">Node.js</option>
          <option value="Performance">Performance</option>
          <option value="Security">Security</option>
          <option value="Git">Git</option>
          <option value="JavaScript">JavaScript</option>
          <option value="DevOps">DevOps</option>
          <option value="Accessibility">Accessibility</option>
          <option value="Deployment">Deployment</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-right font-medium">برچسب ها</label>

        <input
          type="text"
          placeholder="برچسب‌های مقاله را وارد کنید"
          className="w-96 h-12 border border-gray-300 rounded-lg px-4 text-right outline-none focus:border-blue-500"
        />
      </div>

      <div className="flex flex-col gap-2 pb-10">
        <label className="text-right font-medium">محتوای مقاله</label>

        <textarea
          placeholder="محتوای مقاله را اینجا وارد کنید"
          className="w-96 h-40 border border-gray-300 rounded-lg px-4 py-3 text-right outline-none resize-none focus:border-blue-500"
        />
      </div>

      <div className="flex flex-row-reverse gap-20">
        <button className="bg-blue-700 w-56 h-8 rounded-xl hover:bg-black text-white">افزودن</button>
        <button className="border border-gray-200 w-24 rounded-xl hover:bg-red-500 ">انصراف</button>
      </div>
    </div>
  );
}
