
import AddressPageDetail from "@/public/src/component/PageDetail/AddressPageDetail";
import ContexPageDetail from "@/public/src/component/PageDetail/ContexPageDetail";
import HeaderPageDetail from "@/public/src/component/PageDetail/HeaderPageDetail";
import ImagePageDetail from "@/public/src/component/PageDetail/ImagePageDetail";
import { getWeblogs } from "@/public/src/hooks/useBlogs";
import { useSearchParams } from "next/navigation";

interface Props {
  params: Promise<{
    id: string;
  }>;
}
async function Page({ params }: Props) {

  const weblogs = await getWeblogs();



  const { id } = await params



  const currentBlog = weblogs.find((blog) => blog.id == id)

  console.log(currentBlog)

  return (

    <main>
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-5">

        <AddressPageDetail />

        <HeaderPageDetail
          category={currentBlog?.category}
          title={currentBlog?.title}
        />

        <ImagePageDetail image={currentBlog?.image} />

        <ContexPageDetail title={currentBlog?.title}

          content={currentBlog?.content}

        />

      </div>
    </main>
  )
}

export default Page