export abstract class View<T> {

    protected elemento: HTMLElement;
    private escapar = false;
    
    //? = é uma caracteristica do typescript que diz que é opcional, e não funciona no primeiro parametro
    constructor(seletor: string, escapar?: boolean) {
        this.elemento = document.querySelector(seletor);
        if (escapar) {
            this.escapar = escapar;
        }
    }
    
    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}