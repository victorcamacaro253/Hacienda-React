import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Scale, MapPin, Target, Award, Tag, Calendar, Users, Syringe, Stethoscope, AlignCenterVertical as Certificate, MapPinned, Utensils, Heart, ChevronDown, ChevronUp } from 'lucide-react';
//import { breeds } from '../components/BreedsShowcase';
import './BreedsDetails.css'; // Import the CSS file

const BreedsDetails = () => {
  const navigate = useNavigate();
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  

  const breeds = [
    {
      name: "Brahman",
      description: "Conocida por su resistencia al calor y adaptabilidad. Excelente para producción de carne en climas tropicales.",
      image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=1920",
      characteristics: ["Resistente al calor", "Alta adaptabilidad", "Excelente ganancia de peso"],
      carouselImages: [
        "https://images.unsplash.com/photo-1584935385440-1c5a59c0803b?auto=format&fit=crop&q=80&w=1920",
        "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=1920",
        "https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?auto=format&fit=crop&q=80&w=1920"
      ],
      details: {
        origin: "Estados Unidos (desarrollada a partir de razas de la India)",
        weight: {
          male: "800-1100 kg",
          female: "500-700 kg"
        },
        uses: ["Carne", "Cruces"],
        advantages: [
          "Excelente resistencia al calor",
          "Alta resistencia a parásitos",
          "Buena producción de carne",
          "Longevidad"
        ]
      },
      availableAnimals: [
        {
          id: "BR001",
          sex: "Macho",
          age: "24 meses",
          weight: "950 kg",
          price: "$2,800",
          birthdate: "2022-03-15",
          mother: "BR-M-156",
          father: "BR-P-089",
          vaccination: "Completo",
          lastCheckup: "2024-02-10",
          geneticCertification: "Certificado",
          location: "Potrero 3",
          feedingProgram: "Pastoreo + Suplemento Premium",
          health: "Excelente"
        },
        {
          id: "BR002",
          sex: "Hembra",
          age: "18 meses",
          weight: "600 kg",
          price: "$2,200",
          birthdate: "2022-09-20",
          mother: "BR-M-178",
          father: "BR-P-092",
          vaccination: "Completo",
          lastCheckup: "2024-02-12",
          geneticCertification: "En proceso",
          location: "Potrero 2",
          feedingProgram: "Pastoreo Natural",
          health: "Bueno"
        },
        {
          id: "BR003",
          sex: "Macho",
          age: "12 meses",
          weight: "450 kg",
          price: "$1,800",
          birthdate: "2023-03-10",
          mother: "BR-M-162",
          father: "BR-P-089",
          vaccination: "Completo",
          lastCheckup: "2024-02-15",
          geneticCertification: "Pendiente",
          location: "Potrero 1",
          feedingProgram: "Pastoreo + Suplemento Estándar",
          health: "Excelente"
        }
      ]
    },
    {
      name: "Angus",
      description: "Raza premium para carne, conocida por su marmoleo excepcional y rápido crecimiento.",
      image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=1920",
      characteristics: ["Carne premium", "Rápido crecimiento", "Excelente marmoleo"],
      carouselImages: [
        "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=1920",
        "https://images.unsplash.com/photo-1548667348-5bcd92d0b72b?auto=format&fit=crop&q=80&w=1920"
      ],
      details: {
        origin: "Escocia",
        weight: {
          male: "850-1100 kg",
          female: "550-750 kg"
        },
        uses: ["Carne premium"],
        advantages: [
          "Carne de alta calidad",
          "Excelente marmoleo",
          "Precocidad",
          "Facilidad de parto"
        ]
      },
      availableAnimals: [
        { id: "AN001", sex: "Macho", age: "20 meses", weight: "980 kg", price: "$3,200" },
        { id: "AN002", sex: "Hembra", age: "16 meses", weight: "620 kg", price: "$2,600" },
        { id: "AN003", sex: "Macho", age: "14 meses", weight: "580 kg", price: "$2,400" }
      ]
    },
    {
      name: "Holstein",
      description: "La raza lechera más productiva del mundo, conocida por su alta producción de leche.",
      image: "https://images.unsplash.com/photo-1597734816317-2026d4824292?auto=format&fit=crop&q=80&w=1920",
      characteristics: ["Alta producción", "Dócil", "Adaptable"],
      carouselImages: [
        "https://images.unsplash.com/photo-1597734816317-2026d4824292?auto=format&fit=crop&q=80&w=1920",
        "https://images.unsplash.com/photo-1562564013-cf67f287abec?auto=format&fit=crop&q=80&w=1920"
      ],
      details: {
        origin: "Holanda",
        weight: {
          male: "1000-1400 kg",
          female: "600-800 kg"
        },
        uses: ["Leche"],
        advantages: [
          "Mayor producción de leche",
          "Buena adaptabilidad",
          "Alta eficiencia alimenticia",
          "Temperamento dócil"
        ]
      },
      availableAnimals: [
        { id: "HO001", sex: "Hembra", age: "24 meses", weight: "700 kg", price: "$3,000" },
        { id: "HO002", sex: "Hembra", age: "20 meses", weight: "650 kg", price: "$2,800" },
        { id: "HO003", sex: "Hembra", age: "18 meses", weight: "620 kg", price: "$2,600" }
      ]
    },
    {
      name: "Hereford",
      description: "Excelente para la producción de carne, conocida por su eficiencia alimenticia y temperamento dócil.",
      image: "https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?auto=format&fit=crop&q=80&w=1920",
      characteristics: ["Eficiente", "Dócil", "Rústica"],
      carouselImages: [
        "https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?auto=format&fit=crop&q=80&w=1920",
        "https://images.unsplash.com/photo-1602127477198-1a5b6c13da0e?auto=format&fit=crop&q=80&w=1920"
      ],
      details: {
        origin: "Inglaterra",
        weight: {
          male: "900-1200 kg",
          female: "600-800 kg"
        },
        uses: ["Carne", "Cruces"],
        advantages: [
          "Excelente conversión alimenticia",
          "Temperamento dócil",
          "Rusticidad",
          "Buena fertilidad"
        ]
      },
      availableAnimals: [
        { id: "HE001", sex: "Macho", age: "22 meses", weight: "920 kg", price: "$2,900" },
        { id: "HE002", sex: "Hembra", age: "18 meses", weight: "640 kg", price: "$2,400" },
        { id: "HE003", sex: "Macho", age: "16 meses", weight: "580 kg", price: "$2,200" }
      ]
    }
  ];

  return (
    <div className="container-r">
      <div className="max-w-container">
        <button
          onClick={() => navigate('/')}
          className="button"
        >
          <ArrowLeft className="detail-icon" />
          Volver al inicio
        </button>

        <h1 className="title-r">Nuestras Razas de Ganado</h1>
        <p className="subtitle">Información detallada sobre cada raza que criamos</p>

        <div className="space-y-16">
          {breeds.map((breed, index) => (
            <div key={index} className="card d">
              <div className="grid d grid-cols-1 lg:grid-cols-2">
                <div className="image-container">
                  <img
                    src={breed.image}
                    alt={breed.name}
                    className="image"
                  />
                </div>
                <div className="content-r">
                  <h2 className="breed-name">{breed.name}</h2>
                  <p className="description-r">{breed.description}</p>

                  <div className="details-grid">
                    <div className="detail-item">
                      <MapPin className="detail-icon" />
                      <div>
                        <h4 className="detail-title">Origen</h4>
                        <p className="detail-text">{breed.details.origin}</p>
                      </div>
                    </div>
                    <div className="detail-item">
                      <Scale className="detail-icon" />
                      <div>
                        <h4 className="detail-title">Peso Promedio</h4>
                        <p className="detail-text">
                          Macho: {breed.details.weight.male}<br />
                          Hembra: {breed.details.weight.female}
                        </p>
                      </div>
                    </div>
                    <div className="detail-item">
                      <Target className="detail-icon" />
                      <div>
                        <h4 className="detail-title">Usos Principales</h4>
                        <p className="detail-text">{breed.details.uses.join(', ')}</p>
                      </div>
                    </div>
                    <div className="detail-item">
                      <Award className="detail-icon" />
                      <div>
                        <h4 className="detail-title">Ventajas</h4>
                        <ul className="detail-text list-disc list-inside">
                          {breed.details.advantages.map((advantage, i) => (
                            <li key={i}>{advantage}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-2xl h3 font-bold text-gray-800 mb-4 flex items-center"  style={{ fontSize: '20px' }}>
                      <Tag className="detail-icon" />
                      Animales Disponibles
                      </h3>
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Sexo</th>
                            <th>Edad</th>
                            <th>Peso</th>
                            <th>Precio</th>
                            <th>Detalles</th>
                          </tr>
                        </thead>
                        <tbody>
                          {breed.availableAnimals.map((animal, i) => (
                            <React.Fragment key={i}>
                              <tr className={`hover:bg-gray-50 ${selectedAnimal === animal.id ? 'selected' : ''}`}>
                                <td>{animal.id}</td>
                                <td>{animal.sex}</td>
                                <td>{animal.age}</td>
                                <td>{animal.weight}</td>
                                <td>{animal.price}</td>
                                <td>
                                  <button
                                    onClick={() => setSelectedAnimal(selectedAnimal === animal.id ? null : animal.id)}
                                    className="text-green-600 hover:text-green-800 flex items-center"
                                  >
                                    {selectedAnimal === animal.id ? (
                                      <>Ocultar <ChevronUp className="ml-1 h-4 w-4" /></>
                                    ) : (
                                      <>Ver más <ChevronDown className="ml-1 h-4 w-4" /></>
                                    )}
                                  </button>
                                </td>
                              </tr>
                              {selectedAnimal === animal.id && (
                                <tr className="bg-green-50">
                                  <td colSpan="6" className="px-6 py-4">
                                    <div className="grid  gap-4">
                                      <div className="flex items-center space-x-2 py-1">
                                        <Calendar className="detail-icon  " />
                                        <h4 className="text-sm font-medium text-gray-900">Fecha de Nacimiento</h4>
                                        <div>
                                          
                                          <p className="text-sm text-gray-500">{formatDate(animal.birthdate)}</p>
                                        </div>
                                      </div>
                                      <div className="flex items-center space-x-2 py-1">
                                        <Users className="detail-icon" />
                                        <div>
                                          <h4 className="text-sm font-medium text-gray-900">Padres</h4>
                                          <p className="text-sm text-gray-500">
                                            Madre: {animal.mother}<br />
                                            Padre: {animal.father}
                                          </p>
                                        </div>
                                      </div>
                                      <div className="flex items-center space-x-2">
                                        <Syringe className="detail-icon" />
                                        <div>
                                          <h4 className="text-sm font-medium text-gray-900">Vacunación</h4>
                                          <p className="text-sm text-gray-500">{animal.vaccination}</p>
                                        </div>
                                      </div>
                                      <div className="flex items-center space-x-2">
                                        <Stethoscope className="detail-icon" />
                                        <div>
                                          <h4 className="text-sm font-medium text-gray-900">Último Chequeo</h4>
                                          <p className="text-sm text-gray-500">{formatDate(animal.lastCheckup)}</p>
                                        </div>
                                      </div>
                                      <div className="flex items-center space-x-2">
                                        <Certificate className="detail-icon" />
                                        <div>
                                          <h4 className="text-sm font-medium text-gray-900">Certificación Genética</h4>
                                          <p className="text-sm text-gray-500">{animal.geneticCertification}</p>
                                        </div>
                                      </div>
                                      <div className="flex items-center space-x-2">
                                        <MapPinned className="detail-icon" />
                                        <div>
                                          <h4 className="text-sm font-medium text-gray-900">Ubicación</h4>
                                          <p className="text-sm text-gray-500">{animal.location}</p>
                                        </div>
                                      </div>
                                      <div className="flex items-center space-x-2">
                                        <Utensils className="detail-icon" />
                                        <div>
                                          <h4 className="text-sm font-medium text-gray-900">Programa de Alimentación</h4>
                                          <p className="text-sm text-gray-500">{animal.feedingProgram}</p>
                                        </div>
                                      </div>
                                      <div className="flex items-center space-x-2">
                                        <Heart className="detail-icon" />
                                        <div>
                                          <h4 className="text-sm font-medium text-gray-900">Estado de Salud</h4>
                                          <p className="text-sm text-gray-500">{animal.health}</p>
                                        </div>
                                      </div>
                                    </div>

                                  </td>
                                </tr>
                              )}
                            </React.Fragment>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="characteristics">
                    {breed.characteristics.map((characteristic, i) => (
                      <span
                        key={i}
                        className="characteristic"
                      >
                        {characteristic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreedsDetails;
