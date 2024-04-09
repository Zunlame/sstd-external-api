import { Injectable, NotFoundException } from '@nestjs/common';
import { Profile } from './model/profile';
import { Experience } from './model/experience';

@Injectable()
export class AppService {

  // Static data
  private profilesMap: Map<string, Profile> = 
    new Map([
      [
        "1f853e60-13fd-4edf-b1fe-dac728f081c6", 
        new Profile(
          "Hugo Buffet", 
          "Auto Entrepreneur / Leader Technique / Développeur logiciels", 
          "Co-fondateur",
          "https://fr.linkedin.com/in/hugo-buffet-582a99229",
          [
            new Experience("Auto-entrepreneur", "Hugo Buffet EI", "oct. 2023 - aujourd'hui"),
            new Experience("Développeur Full Stack", "ITGA", "sept. 2019 - févr. 2023"),
            new Experience("Ingénieur logiciels", "Capgegmini", "mars 2014 - août 2019")
          ]
        )
      ],
      [
        "ee198a4e-482a-4e25-bf81-91b58c97dd5d", 
        new Profile(
          "Kévin Crouillere", 
          "Responsable d'application chez Worldline Global", 
          "Co-fondateur",
          "https://fr.linkedin.com/in/k%C3%A9vin-crouillere-252032a9",
          [
            new Experience("Ingénieur logiciel senior", "SOFTEAM", "juin 2023 - aujourd'hui"),
            new Experience("Consultant", "Synchrone Fr", "févr. 2023 - juin 2023"),
            new Experience("Responsable d'application", "Worldline", "mai 2019 - jan. 2023"),
            new Experience("Ingénieur Logiciels", "Capgemini", "mars 2016 - mai 2019")
          ]
        )
      ],
      [
        "292b9436-5462-4e2d-87eb-bc355ceab56f", 
        new Profile(
          "Valentin Loiseau", 
          "Étudiant Développeur FULL-STACK à GRETA Bretagne SUD", 
          "Développeur Web",
          "https://fr.linkedin.com/in/valentin-loiseau-28b8232b1",
          [
            new Experience("Étudiant", "Greta Vannes Bretagne sud", "2023 - 2024")
          ]
        )
      ]
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
