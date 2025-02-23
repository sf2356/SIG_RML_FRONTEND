export class Reservation {

  id?: number;  // Facultatif, généré par la base de données
  ufr?: string;
  filiere?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
  equipmentIds?: number[]; //Liste des équipements sélectionnés
  userId?: number

}
