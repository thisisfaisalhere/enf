export type Project = {
  id: string;
  name: string;
  location: string;
  status: 'Completed' | 'Under Construction' | 'New Launch';
  imageId: string;
  description: string;
  amenities?: { name: string; distance: string; icon: string }[];
};

export const projects: Project[] = [
  { id: 'verso', name: 'Verso', location: 'Limassol', status: 'New Launch', imageId: 'project-verso', description: 'A new vision of luxury living, offering unparalleled style and comfort.' },
  { id: 'elias', name: 'Elias', location: 'Germasogeia', status: 'Completed', imageId: 'project-elias', description: 'Contemporary elegance in a prime location, perfect for a modern lifestyle.' },
  { id: 'sotia', name: 'Sotia', location: 'Agios Athanasios', status: 'Under Construction', imageId: 'project-sotia', description: 'Spacious family homes with modern amenities and beautiful green surroundings.' },
  { id: 'mamas', name: 'Mamas', location: 'Panthea', status: 'Completed', imageId: 'project-mamas', description: 'Panoramic city and sea views combined with sophisticated interior design.' },
  { id: 'vladimiros', name: 'Vladimiros', location: 'Mesa Geitonia', status: 'New Launch', imageId: 'project-vladimiros', description: 'Urban living redefined with smart home technology and premium finishes.' },
  { id: 'meca-twins', name: 'Meca Twins', location: 'City Center', status: 'Completed', imageId: 'project-meca-twins', description: 'Iconic twin towers offering premium facilities and breathtaking views.' },
  { id: 'q-residence', name: 'Q Residence', location: 'Tourist Area', status: 'Under Construction', imageId: 'project-q-residence', description: 'Exclusive residences just a stone\'s throw away from the Mediterranean sea.' },
  { id: 'costa', name: 'Costa', location: 'Agios Tychonas', status: 'Completed', imageId: 'project-costa', description: 'Serene coastal living with breathtaking sea views and private beach access.' },
  { id: 'vasiliki', name: 'Vasiliki', location: 'Ekali', status: 'New Launch', imageId: 'project-vasiliki', description: 'A modern masterpiece of architecture featuring innovative design and sustainable materials.' },
];
