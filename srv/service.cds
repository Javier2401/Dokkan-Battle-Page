using sap.my.dokkanpage as my from '../db/schema.cds';

service CaracterInfo {
    entity Caracteres as projection on my.Caracter;
}
