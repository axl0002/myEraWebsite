import Image from "next/image";
import { WaitlistForm } from "./waitlist-form";

const BTS_MEMBERS = [
  { name: "RM", image: "/members/RM.jpg", blur: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAACgAAAAD/wgARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAMEAQUABgcICQoL/8QAwxAAAQMDAgQDBAYEBwYECAZzAQIAAxEEEiEFMRMiEAZBUTIUYXEjB4EgkUIVoVIzsSRiMBbBctFDkjSCCOFTQCVjFzXwk3OiUESyg/EmVDZklHTCYNKEoxhw4idFN2WzVXWklcOF8tNGdoDjR1ZmtAkKGRooKSo4OTpISUpXWFlaZ2hpand4eXqGh4iJipCWl5iZmqClpqeoqaqwtba3uLm6wMTFxsfIycrQ1NXW19jZ2uDk5ebn6Onq8/T19vf4+fr/2wBDAAICAgICAgMCAgMFAwMDBQYFBQUFBggGBgYGBggKCAgICAgICgoKCgoKCgoMDAwMDAwODg4ODg8PDw8PDw8PD//bAEMBAgICBAQEBwQEBxALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/aAAwDAQACEQMRAAAB9R9w5PkPa8v/2gAIAQEAAQUCtL+a4nN5aE3f71ROX//aAAgBAxEBPwH3iOH/2gAIAQIRAT8BlhjPl//aAAgBAQAGPwK03KS7XLMhVJYRGRy6+nwdeaGQy//EABcQAQEBAQAAAAAAAAAAAAAAAAERACH/2gAIAQEAAT8hj8bQgQhjYc7LWA1e8vw2fxeQdt//2gAMAwEAAhEDEQAAEFf/xAAXEQEBAQEAAAAAAAAAAAAAAAABABEh/9oACAEDEQE/EA/Hc/O//9oACAECEQE/EHPj+3+L/9oACAEBAAE/EFXKSzhESzqiMDgJgIglEvYkj6uAYBx1LJY9vN5C+T3f/9k=" },
  { name: "Jin", image: "/members/Jin.jpg", blur: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAACgAAAAD/wgARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAMEAQUABgcICQoL/8QAwxAAAQMDAgQDBAYEBwYECAZzAQIAAxEEEiEFMRMiEAZBUTIUYXEjB4EgkUIVoVIzsSRiMBbBctFDkjSCCOFTQCVjFzXwk3OiUESyg/EmVDZklHTCYNKEoxhw4idFN2WzVXWklcOF8tNGdoDjR1ZmtAkKGRooKSo4OTpISUpXWFlaZ2hpand4eXqGh4iJipCWl5iZmqClpqeoqaqwtba3uLm6wMTFxsfIycrQ1NXW19jZ2uDk5ebn6Onq8/T19vf4+fr/2wBDAAICAgICAgMCAgMFAwMDBQYFBQUFBggGBgYGBggKCAgICAgICgoKCgoKCgoMDAwMDAwODg4ODg8PDw8PDw8PD//bAEMBAgICBAQEBwQEBxALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/aAAwDAQACEQMRAAAB+ivVfm2q97yP/9oACAEBAAEFAvEPO9+94tS9yJ9+IFf/2gAIAQMRAT8B/Vcnh//aAAgBAhEBPwH9ADEcv//aAAgBAQAGPwLb1wXxgCFDJCTp/lfCjqJUfiHP/aPb/8QAFxABAQEBAAAAAAAAAAAAAAAAAREAIf/aAAgBAQABPyFDObKiZU9rEP1eoDx/9qx1tMYc3//aAAwDAQACEQMRAAAQE//EABcRAQEBAQAAAAAAAAAAAAAAAAEAESH/2gAIAQMRAT8QEET/2gAIAQIRAT8QNL/T9b//2gAIAQEAAT8QMH+QpB4hXixMFmgR/dc48UxBeSfF9vnXu//Z" },
  { name: "SUGA", image: "/members/Suga.jpg", blur: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAACgAAAAD/wgARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAMEAQUABgcICQoL/8QAwxAAAQMDAgQDBAYEBwYECAZzAQIAAxEEEiEFMRMiEAZBUTIUYXEjB4EgkUIVoVIzsSRiMBbBctFDkjSCCOFTQCVjFzXwk3OiUESyg/EmVDZklHTCYNKEoxhw4idFN2WzVXWklcOF8tNGdoDjR1ZmtAkKGRooKSo4OTpISUpXWFlaZ2hpand4eXqGh4iJipCWl5iZmqClpqeoqaqwtba3uLm6wMTFxsfIycrQ1NXW19jZ2uDk5ebn6Onq8/T19vf4+fr/2wBDAAICAgICAgMCAgMFAwMDBQYFBQUFBggGBgYGBggKCAgICAgICgoKCgoKCgoMDAwMDAwODg4ODg8PDw8PDw8PD//bAEMBAgICBAQEBwQEBxALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/aAAwDAQACEQMRAAAB+hvWfJ7L2/H/AP/aAAgBAQABBQLd7qOXd+ZGp26EG1QkBH//2gAIAQMRAT8BHVf0f//aAAgBAhEBPwGfRjgW/wD/2gAIAQEABj8CsVR3ikxRHqCa48f1vJKgQfi4qgcGAB5P/8QAFxABAQEBAAAAAAAAAAAAAAAAAREAIf/aAAgBAQABPyEKrJoCaVMkZ6oc2mIIRsxL4UJAAv//2gAMAwEAAhEDEQAAEHP/xAAXEQEBAQEAAAAAAAAAAAAAAAABABEh/9oACAEDEQE/EGVX/9oACAECEQE/EFGji//aAAgBAQABPxBDyrJBC4A+Qc4tLlg+aAjOicXdt7h80pIAAAAYBf/Z" },
  { name: "J-Hope", image: "/members/J-Hope.jpg", blur: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAACgAAAAD/wgARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAMEAQUABgcICQoL/8QAwxAAAQMDAgQDBAYEBwYECAZzAQIAAxEEEiEFMRMiEAZBUTIUYXEjB4EgkUIVoVIzsSRiMBbBctFDkjSCCOFTQCVjFzXwk3OiUESyg/EmVDZklHTCYNKEoxhw4idFN2WzVXWklcOF8tNGdoDjR1ZmtAkKGRooKSo4OTpISUpXWFlaZ2hpand4eXqGh4iJipCWl5iZmqClpqeoqaqwtba3uLm6wMTFxsfIycrQ1NXW19jZ2uDk5ebn6Onq8/T19vf4+fr/2wBDAAICAgICAgMCAgMFAwMDBQYFBQUFBggGBgYGBggKCAgICAgICgoKCgoKCgoMDAwMDAwODg4ODg8PDw8PDw8PD//bAEMBAgICBAQEBwQEBxALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/aAAwDAQACEQMRAAAB+mb/AMY+cPQw/9oACAEBAAEFAt/mVbH9KbS/ExP6RUteX//aAAgBAxEBPwEYgQ//2gAIAQIRAT8BEeH/2gAIAQEABj8CtZIrjlBK+pI4kF/4zH+LH9hP8LPUX//EABcQAQEBAQAAAAAAAAAAAAAAAAERACH/2gAIAQEAAT8hVYUfPaOws20KBWLP/2gAMAwEAAhEDEQAAEG//xAAXEQEBAQEAAAAAAAAAAAAAAAABABEh/9oACAEDEQE/EADf/9oACAECEQE/ENTrf//aAAgBAQABPxCDTW6kAyKghHIWNvWM9JE+R4qfSwVjlWqovZ83/9k=" },
  { name: "Jimin", image: "/members/Jimin.jpg", blur: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAACgAAAAD/wgARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAMEAQUABgcICQoL/8QAwxAAAQMDAgQDBAYEBwYECAZzAQIAAxEEEiEFMRMiEAZBUTIUYXEjB4EgkUIVoVIzsSRiMBbBctFDkjSCCOFTQCVjFzXwk3OiUESyg/EmVDZklHTCYNKEoxhw4idFN2WzVXWklcOF8tNGdoDjR1ZmtAkKGRooKSo4OTpISUpXWFlaZ2hpand4eXqGh4iJipCWl5iZmqClpqeoqaqwtba3uLm6wMTFxsfIycrQ1NXW19jZ2uDk5ebn6Onq8/T19vf4+fr/2wBDAAICAgICAgMCAgMFAwMDBQYFBQUFBggGBgYGBggKCAgICAgICgoKCgoKCgoMDAwMDAwODg4ODg8PDw8PDw8PD//bAEMBAgICBAQEBwQEBxALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/aAAwDAQACEQMRAAAB+gO38ub+7w//2gAIAQEAAQUCvJLtG55JU77/AGpIkXh//9oACAEDEQE/ARjFP//aAAgBAhEBPwEwf//aAAgBAQAGPwK2n59LVIoUJ/arrl9jyBqCyP8Ab4NPUeD/AP/EABcQAQEBAQAAAAAAAAAAAAAAAAERACH/2gAIAQEAAT8hFjnsw0Y7FEf1TE9A+RqQzjGUUjgd+r//2gAMAwEAAhEDEQAAEL//xAAXEQEBAQEAAAAAAAAAAAAAAAABABEh/9oACAEDEQE/EFC//9oACAECEQE/ENDC/9oACAEBAAE/ECJRtMGESx4lsIxLUAxGEjQJ8leYNIOOeSl/2Q==" },
  { name: "V", image: "/members/V.jpg", blur: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAACgAAAAD/wgARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAMEAQUABgcICQoL/8QAwxAAAQMDAgQDBAYEBwYECAZzAQIAAxEEEiEFMRMiEAZBUTIUYXEjB4EgkUIVoVIzsSRiMBbBctFDkjSCCOFTQCVjFzXwk3OiUESyg/EmVDZklHTCYNKEoxhw4idFN2WzVXWklcOF8tNGdoDjR1ZmtAkKGRooKSo4OTpISUpXWFlaZ2hpand4eXqGh4iJipCWl5iZmqClpqeoqaqwtba3uLm6wMTFxsfIycrQ1NXW19jZ2uDk5ebn6Onq8/T19vf4+fr/2wBDAAICAgICAgMCAgMFAwMDBQYFBQUFBggGBgYGBggKCAgICAgICgoKCgoKCgoMDAwMDAwODg4ODg8PDw8PDw8PD//bAEMBAgICBAQEBwQEBxALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/aAAwDAQACEQMRAAAB9s9E+SvDPqPB/9oACAEBAAEFAt7ms7XxD/Sbw+XuZJ3ta15//9oACAEDEQE/AZ/ISB4D/9oACAECEQE/AYfFQMQSX//aAAgBAQAGPwK3vxeSZR0EkaFHFIHqOBq6+9p/A/3Hf/7uk/hDV1Hi/wD/xAAXEAEBAQEAAAAAAAAAAAAAAAABEQAh/9oACAEBAAE/IUte4Bg8FZHZ2gDl7UMKoVDEcju//2gAMAwEAAhEDEQAAEDf/xAAXEQEBAQEAAAAAAAAAAAAAAAABABEh/9oACAEDEQE/EFoH6b//2gAIAQIRAT8QbBuH0/xf/9oACAEBAAE/EEhq+rHGiEyIDYgmmEggk7p2sQcAVQw/hihAAID8t//Z" },
  { name: "Jungkook", image: "/members/JK.jpg", blur: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAACgAAAAD/wgARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAMEAQUABgcICQoL/8QAwxAAAQMDAgQDBAYEBwYECAZzAQIAAxEEEiEFMRMiEAZBUTIUYXEjB4EgkUIVoVIzsSRiMBbBctFDkjSCCOFTQCVjFzXwk3OiUESyg/EmVDZklHTCYNKEoxhw4idFN2WzVXWklcOF8tNGdoDjR1ZmtAkKGRooKSo4OTpISUpXWFlaZ2hpand4eXqGh4iJipCWl5iZmqClpqeoqaqwtba3uLm6wMTFxsfIycrQ1NXW19jZ2uDk5ebn6Onq8/T19vf4+fr/2wBDAAICAgICAgMCAgMFAwMDBQYFBQUFBggGBgYGBggKCAgICAgICgoKCgoKCgoMDAwMDAwODg4ODg8PDw8PDw8PD//bAEMBAgICBAQEBwQEBxALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/aAAwDAQACEQMRAAAB+hPSfLe59XzP/9oACAEBAAEFApVS2viOgL3n/Grcnkf/2gAIAQMRAT8B93mn/9oACAECEQE/ATj4Bf/aAAgBAQAGPwIzXN0r3eQYpRrgnTzHrXzdWXH/AGQ//8QAFxABAQEBAAAAAAAAAAAAAAAAAREAIf/aAAgBAQABPyF4iG2FHBznfS8Ro3MGbeR//G//2gAMAwEAAhEDEQAAEI//xAAXEQEBAQEAAAAAAAAAAAAAAAABABEh/9oACAEDEQE/EOzHV//aAAgBAhEBPxDtHZf/2gAIAQEAAT8Ql4amGUJBGXOowKGIdAmiPdA86lmbHN5Z+b1v/9k=" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-pink-200/30">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/logo-icon.png"
            alt="MyEra"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-lg font-semibold tracking-tight">MyEra</span>
        </div>
      </div>
    </nav>
  );
}

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 px-6">
      {/* Background glow */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-pink-300/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-blue-300/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-300/40 bg-pink-50 text-pink-400 text-sm mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-pink-300 animate-pulse" />
          BTS is back — celebrate their comeback
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-in-up">
          Relive your favourite
          <br />
          <span className="text-gradient">BTS eras</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 animate-fade-in-up [animation-delay:200ms] opacity-0">
          You already have hundreds of saved BTS photos in your camera roll.
          Upload them. Organise them. Build your personal era collection - starting with BTS.
        </p>

        {/* Waitlist */}
        <div className="animate-fade-in-up [animation-delay:400ms] opacity-0 w-full">
          <WaitlistForm />
          <p className="text-gray-400 text-sm mt-3">
            Be the first to know when we launch.
          </p>
        </div>

        {/* Phone mockup placeholder — commented out until real mockup is ready
        <div className="relative mt-16 sm:mt-20 animate-fade-in-up [animation-delay:600ms] opacity-0">
          <div className="mx-auto w-[280px] h-[560px] rounded-[3rem] border-2 border-pink-200/40 bg-gradient-to-b from-pink-50 to-blue-50 p-3 glow-accent">
            <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-b from-white to-pink-50/50 border border-pink-100 flex flex-col items-center justify-center overflow-hidden">
              <div className="absolute top-6 w-24 h-6 bg-background rounded-full" />
              <div className="flex flex-col items-center gap-4 p-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-300 to-blue-300 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">M</span>
                </div>
                <p className="text-pink-400 text-sm font-medium">my era</p>
                <div className="flex gap-2 mt-4">
                  {["RM", "Jin", "SUGA"].map((name) => (
                    <div
                      key={name}
                      className="w-16 h-20 rounded-xl bg-gradient-to-b from-pink-100/60 to-blue-100/60 border border-pink-200/40 flex items-end justify-center pb-1"
                    >
                      <span className="text-[10px] text-gray-500">{name}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 mt-1">
                  {["J-Hope", "Jimin", "V", "JK"].map((name) => (
                    <div
                      key={name}
                      className="w-14 h-18 rounded-xl bg-gradient-to-b from-blue-100/60 to-pink-100/60 border border-blue-200/40 flex items-end justify-center pb-1"
                    >
                      <span className="text-[10px] text-gray-500">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -left-4 top-1/3 w-20 h-20 rounded-2xl bg-pink-50 border border-pink-200/40 backdrop-blur-sm animate-float flex items-center justify-center">
            <HeartIcon className="w-8 h-8 text-pink-400" />
          </div>
          <div className="absolute -right-4 top-1/2 w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200/40 backdrop-blur-sm animate-float [animation-delay:2s] flex items-center justify-center">
            <StarIcon className="w-6 h-6 text-blue-400" />
          </div>
        </div>
        */}
      </div>
    </section>
  );
}

export function FeaturesSection() {
  const features = [
    {
      icon: <CameraIcon className="w-6 h-6" />,
      title: "Upload Memories",
      description:
        "Share your favourite photos, concert clips, and fan moments from every era of your favourite idols.",
    },
    {
      icon: <SparklesIcon className="w-6 h-6" />,
      title: "Curate Your Eras",
      description:
        "Organise your memories by era, comeback, or moment. Build a timeline of your K-Pop journey.",
    },
    {
      icon: <HeartIcon className="w-6 h-6" />,
      title: "Connect with ARMY",
      description:
        "Discover and appreciate memories shared by fans around the world. React, save, and share.",
    },
    {
      icon: <ShieldIcon className="w-6 h-6" />,
      title: "Safe Community",
      description:
        "A respectful space built for fans, by fans. We keep the community positive and welcoming.",
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            <span className="text-gradient">Your eras, collected.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            A digital photocard journal for ARMY.
            Upload, swipe, and curate your BTS archive - all in one place.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl border border-pink-200/30 bg-white/60 hover:border-pink-300/50 hover:bg-white/80 hover:shadow-lg hover:shadow-pink-100/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-100 to-blue-100 flex items-center justify-center text-pink-400 mb-5 group-hover:from-pink-200 group-hover:to-blue-200 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BTSSection() {
  return (
    <section id="bts" className="py-20 sm:py-32 px-6 relative">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-200/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-0 top-1/3 w-[300px] h-[300px] bg-pink-200/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-300/40 bg-blue-50 text-blue-400 text-sm mb-6">
            Featured Group
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            <span className="text-gradient">Arirang era begins</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            As BTS return with Arirang, MyEra launches with full support for all 7 members — from debut to now.
            Collect the moments that shaped you.
          </p>
        </div>

        {/* BTS Member Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {BTS_MEMBERS.map((member, i) => (
            <div
              key={member.name}
              className="group relative aspect-[3/4] rounded-2xl border border-pink-200/30 overflow-hidden hover:border-pink-300/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-100/30"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 14vw"
                placeholder="blur"
                blurDataURL={member.blur}
              />
              {/* Name overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent pt-8 pb-3 px-2">
                <h3 className="font-semibold text-sm sm:text-base text-white text-center">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            { value: "7", label: "Members" },
            { value: "10+", label: "Years of Eras" },
            { value: "ARMY", label: "Community" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gradient">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Join the Waitlist",
      description: "Sign up with your email to get early access when we launch.",
    },
    {
      step: "02",
      title: "Pick Your Member",
      description: "Choose which BTS member's era you want to contribute to.",
    },
    {
      step: "03",
      title: "Upload Your Memories",
      description:
        "Share photos, clips, and moments from your favourite eras.",
    },
    {
      step: "04",
      title: "Explore & Connect",
      description: "Browse eras from other ARMY and discover new memories.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            How it <span className="text-gradient">works</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Start preserving your favourite K-Pop moments in four simple steps.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="flex gap-6 items-start p-6 rounded-2xl border border-pink-200/30 bg-white/60 hover:border-pink-300/50 transition-all group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-pink-100 to-blue-100 flex items-center justify-center border border-pink-200/30 group-hover:from-pink-200 group-hover:to-blue-200 transition-all">
                <span className="text-sm font-bold text-pink-400">
                  {item.step}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section id="waitlist" className="py-20 sm:py-32 px-6 relative">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-pink-200/15 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
          Ready to relive
          <br />
          <span className="text-gradient">your era?</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10">
          Be the first to know when MyEra launches. Join the waitlist and
          get early access to start sharing your favourite BTS moments.
        </p>

        <WaitlistForm />

        <p className="text-gray-400 text-sm mt-6">
          No spam, ever. We&apos;ll only email you when the app is ready.
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-pink-200/30 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Image
              src="/logo-icon.png"
              alt="MyEra"
              width={28}
              height={28}
              className="rounded-lg"
            />
            <span className="text-sm font-semibold tracking-tight">my era</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="/privacy" className="hover:text-gray-600 transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-gray-600 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Contact
            </a>
          </div>

          <p className="text-sm text-gray-400">
            &copy; 2026 MyEra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---- Icons ---- */

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  );
}


function CameraIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
      />
    </svg>
  );
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
      />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>
  );
}
