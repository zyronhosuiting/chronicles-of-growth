import Slogan from "@/components/home/Slogan";

export default function Home() {
  return (
    <div
      className="relative h-screen w-full"
      style={{
        backgroundImage: "url(/home/sky-city.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="fixed bottom-[10%]">
        <Slogan />
      </div>
    </div>
  );
}
