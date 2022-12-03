import Image from "next/image";
import { BlogHighlightCard } from "components/Blog/BlogHighlightCard";

export default function Home() {
  return (
    <div className="px-8">
      <div className="flex sm:flex-row flex-col-reverse justify-between">
        <div className="flex flex-col justify-top align-top mb-8 sm:mb-24 text-center sm:text-left">
          <h1 className="font-bold text-3xl md:text-4xl mb-8 tracking-tight text-gray-700 dark:text-white">
            James Haworth Wheatman
          </h1>
          <h2 className="text-gray-700 dark:text-gray-200 md:text-xl text-xl">
            Architect Developer at <span className="font-semibold">Theodo</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base">
            I help people do good things with software!
          </p>
        </div>
        <div className="relative mx-auto w-[225px] h-[225px] overflow-hidden rounded-full m-5 hover:scale-[1.05] transition-all hover:shadow-xl shadow-md">
          <Image
            alt="James Haworth Wheatman"
            src="/avatar.png"
            priority
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMADQkKCwoIDQsKCw4ODQ8TIBUTEhITJxweFyAuKTEwLiktLDM6Sj4zNkY3LC1AV0FGTE5SU1IyPlphWlBgSlFST//bAEMBDg4OExETJhUVJk81LTVPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT//AABEIAI0AjQMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAABAgMABP/EABgQAQEBAQEAAAAAAAAAAAAAAAABEQIS/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAXEQEBAQEAAAAAAAAAAAAAAAAAAREC/9oADAMBAAIRAxEAPwCHDXaGcJTpRW/JKdLOt+VQxOmUlLcnTqojoijRauMaKiqtRabOoqKu1nTOCpNAU9Ou1Gu06wjTXajTqK6OF67UadRW/K9Os9OktprtZ+nejjPppqbUehelRjVWotF6TapBtRa61NoOR1DtGhWNNOstOqrn5a6dZ6dRXRw012o12oro5XrvTPXaS2noemfoXo4zsaXoXpleh6VGVjS9C9M/Q9GjGmjUa7QqRWu1Ou0tVjtMrPTKuuTlrKdZyq1FdPC9dqddqK6OTotTaLSWb0m9JtTaabFXoekWp1UrKxp6PplplPU4106zlVKWnIrTqdOjV4kwGK1ySKiomKibW/MILkVvympqqmwloqLV2Io0WItGmg9Z2O0ygw9Ti4qIi4NORUKYRp4cMisMh65pBIqR0ipCtbcwY7FYcTrWM7E2NcF5StjYixveUXkBheU2N7ym8hNZYZF+XYacTIqHDhh0LnA22OxeOw9YyCQyKkMiVyCQ4qQ4TSIweWmO8kpjeReW3kXkBheU3lveU3kyrC8jy2vIvJpZY7F2DASccrAYerHYrDhJxMipDhkJUEisMhkJcGOxUhwjR5F5aY7AGV5ReW9iLDKsbymxtYiw0sbE2NbEWGSAqgyex2OKQ6GOMJUMVBDCVDDjoQbsGKACbE2LqaZVnYixpUdGmsqitKjpRIoNAJ//2Q=="
          />
        </div>
      </div>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6">
        Articles
      </h3>
      <div className="flex gap-6 flex-col md:flex-row">
        <BlogHighlightCard
          slug="serverless-for-long-computational-tasks"
          title="AWS Fargate: harness the power of serverless for long-running computational tasks"
          gradient="from-gray-300 to-gray-500"
        />
        <BlogHighlightCard
          slug="writing-a-native-ionic-plugin-for-capacitor"
          title="Writing a native Ionic plugin for Capacitor in less than 30 minutes"
          gradient="from-gray-500 to-gray-700"
        />
        <BlogHighlightCard
          slug="principles-from-clean-code"
          title="Principles gathered from Clean Code: A Handbook of Agile Software Craftsmanship"
          gradient="from-gray-700 to-gray-300"
        />
      </div>
    </div>
  );
}
