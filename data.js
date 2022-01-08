class cal {
    constructor() {
        this.input = createInput("").attribute("placeholder","0");
        this.b1 = createButton("1");
        this.b2 = createButton("2");
        this.b3 = createButton("3");
        this.b4 = createButton("4");
        this.b5 = createButton("5");
        this.b6 = createButton("6");
        this.b7 = createButton("7");
        this.b8 = createButton("8");
        this.b9 = createButton("9");
        this.b0 = createButton("0");
        this.bac = createButton("AC");
        this.bdot = createButton(".");
        this.bmulti = createButton("×");
        this.bdiv = createButton("÷");
        this.bmin = createButton("-");
        this.bplus = createButton("+");
        this.bequal = createButton("=");
        this.bspace = createButton("⌫");
    }

    style() {
        this.bequal.class("equal");
        this.input.class("di");
        this.b1.class("db");
        this.b2.class("db");
        this.b3.class("db");
        this.b4.class("db");
        this.b5.class("db");
        this.b6.class("db");
        this.b7.class("db");
        this.b8.class("db");
        this.b9.class("db");
        this.b0.class("zero");
        this.bac.class("p");
        this.bdot.class("db");
        this.bmulti.class("dcb");
        this.bdiv.class("dcb");
        this.bmin.class("dcb");
        this.bplus.class("dcb");
        this.bspace.class("p");
    }

    hmp() {
    this.b1.mousePressed(()=> {
        ui = ui+"1";
    });
    this.b2.mousePressed(()=> {
        ui = ui+"2";
    });
    this.b3.mousePressed(()=> {
        ui = ui+"3";
    });
    this.b4.mousePressed(()=> {
        ui = ui+"4";
    });
    this.b5.mousePressed(()=> {
        ui = ui+"5";
    });
    this.b6.mousePressed(()=> {
        ui = ui+"6";
    });
    this.b7.mousePressed(()=> {
        ui = ui+"7";
    });
    this.b8.mousePressed(()=> {
        ui = ui+"8";
    });
    this.b9.mousePressed(()=> {
        ui = ui+"9";
    });
    this.b0.mousePressed(()=> {
        ui = ui+"0";
    });
    this.bac.mousePressed(()=> {
        ui = '';
    });
    this.bdot.mousePressed(()=> {
        ui = ui+".";
    });
    this.bequal.mousePressed(()=> {
        result = eval(this.input.value());
        ui = result;
    });
    this.bmulti.mousePressed(()=> {
        ui = ui+"*";
    });
    this.bdiv.mousePressed(()=> {
        ui = ui+"/";
    });
    this.bmin.mousePressed(()=> {
        ui = ui+"-";
    });
    this.bplus.mousePressed(()=> {
        ui = ui+"+";    
    });
    this.bspace.mousePressed(()=> {    
        ui = ui.slice(0,-1);
    });
    this.input.value(ui);
    }

    display() {
        this.style();
        this.hmp();
        this.input.position(0,0);
        this.b1.position(10,164);
        this.b2.position(92,164);
        this.b3.position(174,164);
        this.b4.position(10,246);
        this.b5.position(92,246);
        this.b6.position(174,246);
        this.b7.position(10,328);
        this.b8.position(92,328);
        this.b9.position(174,328);
        this.b0.position(10,410);
        this.bdot.position(174,410);
        this.bac.position(10,84);
        this.bmulti.position(256,328);
        this.bdiv.position(256,246);
        this.bmin.position(256,164);
        this.bplus.position(256,410);
        this.bequal.position(174,84);
        this.bspace.position(92,84);
    }
}