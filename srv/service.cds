using sap.my.dokkanpage as my from '../db/schema.cds';

service CaracterInfo {
    entity Caracters as projection on my.Caracter;
}
