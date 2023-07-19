export class Utils {

    static formatarMilhares(valor: number): string {
        return valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

}