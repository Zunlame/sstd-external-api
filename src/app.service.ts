import { Injectable, NotFoundException } from '@nestjs/common';
import { Profile } from './model/profile';

@Injectable()
export class AppService {

  // Fake data
  private profilesMap: Map<string, Profile> = 
    new Map([
      ["1f853e60-13fd-4edf-b1fe-dac728f081c6", new Profile("Hugo Buffet", "Auto Entrepreneur / Leader Technique / Développeur logiciels", "https://fr.linkedin.com/in/hugo-buffet-582a99229")],
      ["ee198a4e-482a-4e25-bf81-91b58c97dd5d", new Profile("Kévin Crouillere", "Responsable d'application chez Worldline Global", "https://fr.linkedin.com/in/k%C3%A9vin-crouillere-252032a9")],
      ["292b9436-5462-4e2d-87eb-bc355ceab56f", new Profile("Valentin Loiseau", "Étudiant Développeur FULL-STACK à GRETA Bretagne SUD", "https://fr.linkedin.com/in/valentin-loiseau-28b8232b1")]
    ]);

  // Function to get profil from fake data map
  getProfile(id: string): Profile {
    let userProfile = this.profilesMap.get(id);

    if(userProfile == null) {
      throw new NotFoundException("Utilisateur non trouvé");
    }

    return userProfile;
  }

}
