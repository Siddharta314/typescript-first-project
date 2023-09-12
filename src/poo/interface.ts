//interfaces forces us to implement everything it has

interface Elemento {
  id: string;
  text: string;
  classlist: string;

  add(): void;
}

class HtmlElement implements Elemento {
  constructor(
    public id: string,
    public text: string,
    public classlist: string
  ) {}

  add(): void {}
}
