import { z } from "zod";

export const blogSchema = z.object({
  title: z.string().min(3, "عنوان باید حداقل ۳ کاراکتر باشد"),
  summary: z.string().min(10, "خلاصه باید حداقل ۱۰ کاراکتر باشد"),
  image: z.string().url("آدرس تصویر معتبر نیست"),
  category: z.string().min(1, "دسته‌بندی الزامی است"),
  tags: z.string().min(1, "حداقل یک تگ وارد کنید"),
  content: z.string().min(20, "محتوا باید حداقل ۲۰ کاراکتر باشد"),
});

export type BlogFormValues = z.infer<typeof blogSchema>;