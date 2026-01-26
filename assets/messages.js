/* MESSAGES DU BANDEAU - Basés sur l'heure
   Le message change automatiquement selon l'heure de la journée.
*/

function getMessageByTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Convertir en minutes depuis minuit pour faciliter les comparaisons
    const totalMinutes = hours * 60 + minutes;

    // 08h00 = 480 min, 11h30 = 690 min, 13h00 = 780 min, 16h00 = 960 min, 16h30 = 990 min

    if (totalMinutes >= 480 && totalMinutes < 690) {
        // Entre 08h00 et 11h30
        return "Bienvenue chez Grün Signalisation. Passez une agréable journée. --- Grün Signalisation wënscht Iech en agreabelen Dag.";
    }
    else if (totalMinutes >= 690 && totalMinutes < 780) {
        // Entre 11h30 et 13h00
        return "L'équipe Grün Signalisation vous souhaite un bon appétit. --- D'Equipe vu Grün Signalisation wënscht Iech e gudden Appetit.";
    }
    else if (totalMinutes >= 780 && totalMinutes < 960) {
        // Entre 13h00 et 16h00
        return "Grün Signalisation vous souhaite un bon après-midi. --- Grün Signalisation wënscht Iech e schéinen Nomëtteg.";
    }
    else if (totalMinutes >= 960 && totalMinutes < 990) {
        // Entre 16h00 et 16h30
        return "Passez une bonne soirée. À demain ! --- Mir wënschen Iech e schéinen Owend. Bis muer !";
    }
    else {
        // Tous les autres horaires (avant 8h ou après 16h30)
        return "BIENVENUE CHEZ GRÜN SIGNALISATION --- WËLLKOMM BEI GRÜN SIGNALISATION";
    }
}

// Export du message pour le bandeau défilant
const bannerMessages = [getMessageByTime()];
