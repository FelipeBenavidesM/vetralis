'use client';
import React, { useState, useEffect, useRef } from 'react';
import { 
  Stethoscope, 
  MapPin, 
  Phone, 
  Instagram, 
  Calendar,
  Clock,
  HeartPulse,
  Syringe,
  Microscope,
  Home,
  Video,
  FileText,
  Activity,
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  ExternalLink,
  Navigation
} from 'lucide-react';

const App = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    document.title = "Vetralis CMV | Excelencia Veterinaria en Puerto Montt";
    
    // Auto-scroll para las reseñas
    const autoScroll = setInterval(() => {
      if (!isHovering && carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
      }
    }, 5000);

    return () => clearInterval(autoScroll);
  }, [isHovering]);

  const scrollManual = (dir:any) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: dir * 400, behavior: 'smooth' });
    }
  };

  const services = [
    { icon: <Stethoscope size={24} />, label: 'Consultas', desc: 'Atención médica profesional para tu mascota.', bgColor: 'bg-blue-50', iconColor: 'text-blue-600' },
    { icon: <Activity size={24} />, label: 'Ecografía', desc: 'Diagnóstico por imagen de alta precisión.', bgColor: 'bg-green-50', iconColor: 'text-green-600' },
    { icon: <Microscope size={24} />, label: 'Exámenes', desc: 'Análisis clínicos completos y rápidos.', bgColor: 'bg-purple-50', iconColor: 'text-purple-600' },
    { icon: <Syringe size={24} />, label: 'Prevención', desc: 'Vacunas y planes de salud preventiva.', bgColor: 'bg-orange-50', iconColor: 'text-orange-600' },
    { icon: <HeartPulse size={24} />, label: 'Hospitalización', desc: 'Cuidado y monitoreo clínico especializado.', bgColor: 'bg-red-50', iconColor: 'text-red-600' },
    { icon: <FileText size={24} />, label: 'Documentos sanitarios', desc: 'Certificados y trámites oficiales.', bgColor: 'bg-indigo-50', iconColor: 'text-indigo-600' },
    { icon: <Home size={24} />, label: 'Domicilios', desc: 'Atención en la comodidad de tu hogar.', bgColor: 'bg-sky-50', iconColor: 'text-sky-600' },
    { icon: <Video size={24} />, label: 'Telemedicina', desc: 'Orientación médica a distancia.', bgColor: 'bg-teal-50', iconColor: 'text-teal-600' },
  ];

  const team = [
    { name: 'Dra. María José Soto', role: 'Directora Médica', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80' },
    { name: 'Dr. Ricardo Pérez', role: 'Especialista en Cirugía', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80' },
    { name: 'Dr. Javier Martínez', role: 'Medicina Interna', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80' },
  ];

  const reviews = [
    { name: "Scarlet Carrasco Pino", date: "Hace 2 meses", text: "Excelente atención, la doctora explica todo con claridad, tiene mucha paciencia con l@s pelud@s. Nos ayudó con una urgencia, todo fue muy rápido.", rating: 5, initial: "S", color: "bg-blue-600" },
    { name: "Paulette D. Vargas", date: "Hace 1 mes", text: "La atención es buenísima! Muy amable, explica bien todas las consultas, es muy amigable con mi perrita, es la mejor veterinaria que he encontrado.", rating: 5, initial: "P", color: "bg-pink-500" },
    { name: "Cristian Morales", date: "Hace 3 semanas", text: "Muy profesional todo. Equipamiento moderno y se nota que aman lo que hacen. Totalmente recomendados en el sector de Jardín Austral.", rating: 5, initial: "C", color: "bg-green-600" },
    { name: "Andrea Toledo", date: "Hace 4 meses", text: "Llevé a mi gato por una ecografía y el trato fue increíble. Me explicaron cada detalle de los resultados. Muy agradecida por la empatía.", rating: 5, initial: "A", color: "bg-purple-600" },
    { name: "Valentina Ruiz", date: "Hace 1 semana", text: "Mi perrita siempre se estresa en el veterinario pero aquí supieron cómo calmarla. Se nota la vocación y el cariño por los animales.", rating: 5, initial: "V", color: "bg-red-500" }
  ];

  const whatsappLink = "https://wa.me/56986987732?text=Hola%20Vetralis,%20me%20gustaría%20agendar%20una%20hora%20para%20mi%20mascota.";
  const googleMapsUrl = "https://www.google.com/maps/place/Vetralis+Centro+M%C3%A9dico+Veterinario/@-41.4446207,-72.9436141,17z/data=!4m8!3m7!1s0x96183b8a9cee78e9:0x54ff59e5dc97caec!8m2!3d-41.4446207!4d-72.9436141!9m1!1b1!16s%2Fg%2F11ymyyc_2w";
  const googleMapsEmbed = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.5188214309194!2d-72.946189!3d-41.4446167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96183b8a9cee78e9%3A0x54ff59e5dc97caec!2sVetralis%20Centro%20M%C3%A9dico%20Veterinario!5e0!3m2!1ses!2scl!4v1707425100123!5m2!1ses!2scl";

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg text-white">
            <Stethoscope size={24} />
          </div>
          <div>
            <span className="text-2xl font-black tracking-tighter text-blue-900 leading-none block">VETRALIS</span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Centro Médico</span>
          </div>
        </div>
        
        <div className="hidden md:flex gap-8 font-bold text-sm text-gray-500 uppercase tracking-widest">
          <a href="#servicios" className="hover:text-blue-600 transition">Servicios</a>
          {/*<a href="#equipo" className="hover:text-blue-600 transition">Equipo</a>*/}
          <a href="#testimonios" className="hover:text-blue-600 transition">Opiniones</a>
          <a href="#contacto" className="hover:text-blue-600 transition">Contacto</a>
        </div>

        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-bold transition flex items-center gap-2 shadow-lg shadow-blue-200">
          <Calendar size={18} />
          <span className="hidden sm:inline">Agendar</span>
        </a>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent z-10" />
        <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2000&auto=format&fit=crop" alt="Mascotas Vetralis" className="w-full h-full object-cover" />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-start max-w-7xl mx-auto px-8 text-white">
          <div className="bg-blue-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-xl">
            ¡Estamos atendiendo!
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight drop-shadow-2xl">
            Tu mascota en <br />
            <span className="text-blue-200 italic">las mejores manos.</span>
          </h1>
          <p className="text-lg md:text-xl max-w-xl font-bold drop-shadow-md opacity-90 mb-8 leading-relaxed">
            Medicina integral con equipamiento avanzado en Puerto Montt. Cuidamos a tus compañeros con profesionalismo y amor.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-white text-blue-900 px-10 py-4 rounded-2xl font-black shadow-2xl hover:bg-blue-50 transition-all flex items-center gap-3">
            Llamar ahora
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section id="servicios" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-black tracking-[0.3em] uppercase text-xs mb-3">Nuestra especialidad</h2>
          <h3 className="text-4xl font-black text-gray-900 tracking-tight">Servicios Veterinarios</h3>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group bg-gray-50 p-8 rounded-[2rem] hover:bg-white border border-transparent hover:border-gray-100 transition-all duration-300 hover:shadow-2xl flex flex-col items-center text-center">
              <div className={`${s.bgColor} ${s.iconColor} w-14 h-14 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform`}>
                {s.icon}
              </div>
              <h4 className="text-lg font-black text-gray-900 mb-3">{s.label}</h4>
              <p className="text-gray-500 text-xs font-bold leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Equipo Médico 
      <section id="equipo" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-black tracking-[0.3em] uppercase text-xs mb-3">Compromiso real</h2>
            <h3 className="text-4xl font-black text-gray-900 tracking-tight">Nuestro Equipo Médico</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {team.map((m, i) => (
              <div key={i} className="text-center group">
                <div className="w-56 h-56 mx-auto rounded-[3rem] overflow-hidden mb-6 border-8 border-white shadow-xl transition-transform group-hover:-translate-y-2">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-xl font-black text-gray-900">{m.name}</h4>
                <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mt-1">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Google Reviews Section */}
      <section id="testimonios" className="py-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col lg:flex-row justify-between lg:items-end gap-8">
          <div className="max-w-xl">
            <h2 className="text-blue-600 font-black tracking-[0.3em] uppercase text-xs mb-3">Confianza de la comunidad</h2>
            <h3 className="text-4xl font-black text-gray-900 tracking-tight mb-4">Lo que dicen de nosotros</h3>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400 gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <span className="text-sm font-black text-gray-900">4.9 / 5.0</span>
              </div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest border-l pl-3 hidden sm:inline">En Google Maps</span>
              
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
              >
                <ExternalLink size={14} />
                Dejar mi opinión
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <button onClick={() => scrollManual(-1)} className="p-4 rounded-2xl border border-gray-100 hover:bg-gray-50 text-gray-400 hover:text-blue-600 transition shadow-sm bg-white">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => scrollManual(1)} className="p-4 rounded-2xl border border-gray-100 hover:bg-gray-50 text-gray-400 hover:text-blue-600 transition shadow-sm bg-white">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div 
          ref={carouselRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className=" max-w-7xl mx-auto mb-12 flex gap-6 overflow-x-auto px-6 pb-12 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((r, i) => (
            <div key={i} className="flex-none w-[350px] md:w-[450px] bg-gray-50 p-10 rounded-[2.5rem] snap-start border border-gray-100 relative group transition-all hover:bg-white hover:shadow-2xl">
              <div className="absolute top-8 right-8 text-gray-200">
                <Quote size={48} />
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className={`${r.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-black shadow-lg`}>
                  {r.initial}
                </div>
                <div>
                  <h5 className="font-black text-gray-900 text-lg leading-none mb-1">{r.name}</h5>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{r.date}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-4 gap-0.5">
                {[...Array(r.rating)].map((_, idx) => <Star key={idx} size={14} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 font-medium italic leading-relaxed">
                "{r.text}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Horarios y Contacto + Mapa */}
      <section id="contacto" className="py-24 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-8 flex flex-col gap-12">
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            {/* Horarios Card */}
            <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[3rem] border border-white/20 flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <Clock size={32} className="text-blue-200" />
                <h3 className="text-3xl font-black tracking-tight">Horario de atención</h3>
              </div>
              <div className="space-y-6 flex-grow">
                <div className="pb-6 border-b border-white/10">
                  <p className="text-blue-200 font-black uppercase text-[10px] tracking-widest mb-3">Lunes a Viernes</p>
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-black italic">09:00 - 13:30</p>
                    <p className="text-2xl font-black italic">15:00 - 20:00</p>
                  </div>
                </div>
                <div>
                  <p className="text-blue-200 font-black uppercase text-[10px] tracking-widest mb-3">Sábados</p>
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-black italic">11:00 - 14:00</p>
                    <p className="text-2xl font-black italic">15:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Datos de Contacto */}
            <div className="flex flex-col justify-center space-y-8">
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start gap-6 group hover:bg-white/5 p-4 rounded-3xl transition-all"
              >
                <div className="bg-white/20 p-4 rounded-2xl group-hover:bg-white/40 transition-colors">
                  <MapPin size={32} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-xl font-black">Ubicación</h4>
                    <Navigation size={14} className="opacity-50" />
                  </div>
                  <p className="text-lg text-blue-100 font-bold italic underline decoration-blue-300 underline-offset-4">
                    Av. Austral 1289, Jardín Austral, Puerto Montt
                  </p>
                  <span className="text-[10px] font-black uppercase tracking-tighter text-blue-200 mt-2 block">Clic para abrir mapa</span>
                </div>
              </a>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-white text-blue-900 p-6 rounded-3xl flex items-center gap-4 hover:scale-105 transition shadow-xl">
                  <Phone size={24} />
                  <span className="font-black">+56 9 8698 7732</span>
                </a>
                <a href="https://instagram.com/vetralis.cmv" target="_blank" rel="noopener noreferrer" className="bg-white text-pink-600 p-6 rounded-3xl flex items-center gap-4 hover:scale-105 transition shadow-xl">
                  <Instagram size={24} />
                  <span className="font-black">@vetralis.cmv</span>
                </a>
              </div>
            </div>
          </div>

          {/* Mapa Integrado (Responsive) */}
          <div className="w-full h-[400px] rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-2xl relative">
             <iframe 
                src={googleMapsEmbed} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Vetralis CMV"
                className="grayscale-[0.2] contrast-[1.1]"
              ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-gray-100">
        <p className="text-gray-300 text-[10px] font-black uppercase tracking-[0.5em]">
          Vetralis CMV · Excelencia Veterinaria · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default App;