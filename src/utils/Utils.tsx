export class Utils {

    static formatarMilhares(valor: number): string {
        return valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    /*static handleUpload(event: any) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            return reader.result;
        };
    }*/

    static handleUpload(event: any): Promise<string | null> {
        return new Promise((resolve) => {
            const file = event.target.files[0];
    
            if (!file) {
                resolve(null);
                return;
            }
    
            const reader = new FileReader();
            reader.readAsDataURL(file);
    
            reader.onload = () => {
                resolve(reader.result as string);
            };
    
            reader.onerror = () => {
                resolve(null);
            };
        });
    }
}