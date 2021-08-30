import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement("div");
texto.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet porttitor libero. Donec in ipsum justo. Donec ultricies egestas dolor, nec tristique libero tempor et. Proin eu neque eu ligula vehicula malesuada eget in mi. Nunc eget augue maximus, lacinia arcu et, varius magna. Aliquam id venenatis odio. Phasellus tempus sollicitudin consequat. Nullam euismod justo metus, non iaculis massa pharetra vel. Cras tempor dignissim diam, sit amet lacinia mi dictum vitae. Phasellus pellentesque vitae magna vel feugiat. Aliquam metus metus, gravida sed mattis at, faucibus dictum sem.
<br/><br/>
Vivamus vulputate ultrices ante et cursus. Aliquam facilisis elit ac gravida lobortis. Cras id arcu elit. Mauris magna sapien, luctus quis tellus quis, lacinia laoreet enim. Sed a tristique lectus. Praesent tincidunt tristique ipsum, ac tincidunt metus tristique ut. Sed libero neque, molestie quis mollis id, rutrum in nulla. Praesent bibendum libero in orci pretium, sed ultricies ligula vehicula. Nunc aliquet, massa id interdum rhoncus, justo magna efficitur nibh, sed consequat metus turpis nec nulla. Duis lobortis viverra risus, eu viverra sem vestibulum eu.
<br/><br/>
Pellentesque tempus commodo risus ac sollicitudin. Nullam vestibulum molestie velit eget elementum. Curabitur posuere, mauris ut accumsan volutpat, nisl enim aliquet enim, sit amet tincidunt diam orci sed est. Nulla facilisi. Maecenas pellentesque augue vel lobortis consectetur. Nam ex justo, tristique a tortor quis, eleifend ullamcorper turpis. Vivamus consequat lorem quis urna facilisis volutpat. Nam egestas erat lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
<br/><br/>
Vivamus ut finibus tortor. Suspendisse ac consequat felis, non pulvinar turpis. Curabitur varius sodales nunc, id interdum elit interdum vel. Mauris id lorem ut ligula rutrum euismod. Etiam id augue eu dui lacinia hendrerit. Donec non ipsum eget erat facilisis suscipit nec in arcu. Suspendisse maximus neque posuere, dictum orci non, cursus lectus. Vivamus finibus tristique nulla, in condimentum nisl porta sit amet. Donec aliquam posuere velit ut vulputate. Aliquam suscipit vel tortor eleifend lobortis. Cras ullamcorper magna augue, a tempor libero blandit quis. Suspendisse mi erat, porttitor sed lacus vitae, tristique mattis mi. Nulla vel risus id orci accumsan molestie.
<br/><br/>
Interdum et malesuada fames ac ante ipsum primis in faucibus. In quam erat, porttitor id imperdiet vitae, viverra vel lectus. Nullam finibus volutpat diam, vitae consectetur dolor congue in. Sed non lobortis magna, id fringilla dui. Nam pulvinar metus lectus, a suscipit dolor imperdiet maximus. Integer faucibus tempus neque ut mollis. Suspendisse ultrices fermentum porttitor. Morbi aliquam ex justo, et lobortis nisl scelerisque in. Praesent quis erat pretium, vehicula lectus quis, congue leo. Nunc tortor nunc, imperdiet pretium sem quis, interdum aliquet dui. Donec nec neque porttitor, tristique purus a, pharetra velit. Nunc non sagittis ex, non consequat eros. Maecenas gravida nulla sit amet purus ultricies, vel scelerisque mi aliquet. Praesent elementum finibus tristique. Ut turpis nulla, mattis sit amet erat quis, iaculis gravida felis.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur lorem ut leo vestibulum condimentum. Aenean et lacus dolor. Nam rutrum ante et venenatis congue. Suspendisse vehicula, turpis consectetur volutpat efficitur, nisl tortor porttitor felis, a tempor orci nisi ut nibh. Pellentesque vestibulum arcu non sodales posuere. Proin consequat erat nec tortor convallis molestie. Nullam at lorem lectus.
<br/><br/>
Praesent eu magna ut magna varius venenatis eget interdum lectus. Sed euismod tempor nisi ac aliquet. Phasellus odio mauris, consectetur id enim id, porta luctus eros. Curabitur felis nibh, posuere at turpis eget, fringilla malesuada nisl. Quisque pellentesque leo semper metus facilisis consectetur. Quisque lacus sapien, bibendum id rhoncus volutpat, bibendum quis ex. In hac habitasse platea dictumst.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum, leo vel luctus lobortis, dolor quam placerat velit, a faucibus risus turpis et lacus. Mauris vehicula augue dolor, at molestie odio scelerisque in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus et ante sagittis sapien placerat venenatis a nec augue. Maecenas commodo hendrerit justo sit amet rhoncus. Nam nunc neque, condimentum et turpis non, placerat iaculis ante. Donec molestie mi nec nisi varius vestibulum. Proin id augue id dolor porta congue sit amet malesuada lectus. Ut venenatis dui eget pulvinar volutpat. Morbi commodo velit dapibus ligula accumsan commodo. Donec rhoncus quam sit amet pretium dignissim.
<br/><br/>
Nam consequat vehicula imperdiet. Vestibulum finibus odio non sapien ultricies, nec luctus sem aliquet. Maecenas molestie dictum diam et imperdiet. Vestibulum molestie felis in dictum dapibus. Pellentesque suscipit, orci non suscipit fermentum, diam nulla molestie erat, sit amet condimentum lacus metus in massa. Curabitur consequat nec orci vel egestas. Praesent dolor quam, ullamcorper quis porttitor ac, tincidunt non arcu.
<br/><br/>
Vestibulum scelerisque varius viverra. Vivamus id sem sem. Vestibulum sodales tempus nisl quis consequat. Aenean sit amet facilisis justo, id vestibulum tortor. Sed eget hendrerit ligula. Vestibulum ornare facilisis dignissim. Donec sed tellus augue. Maecenas a scelerisque augue, non ullamcorper magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin feugiat ex sit amet ipsum pharetra facilisis et eu eros. Sed mollis lacus eu massa posuere, ut tristique erat commodo. Nunc molestie vitae ex in accumsan. Maecenas ut elit et libero congue dignissim. Phasellus pulvinar dui ac turpis congue facilisis. Sed placerat odio sit amet leo rhoncus, eu rhoncus metus mollis.
<br/><br/>
Ut ac nunc non lorem imperdiet tristique. Suspendisse vel magna cursus, suscipit nibh sit amet, placerat enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur venenatis enim in imperdiet eleifend. Sed id lacinia sapien, vel molestie nisi. Maecenas faucibus blandit rhoncus. Fusce nec tristique lectus, eu imperdiet lorem. Ut pretium, sem quis pulvinar tincidunt, urna est placerat ex, id ullamcorper sem odio volutpat arcu. Integer est odio, iaculis vel fermentum ac, imperdiet vel dolor.
<br/><br/>
Nullam in vehicula massa, in suscipit eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu cursus enim. Nunc porta orci maximus dictum maximus. Aliquam dignissim suscipit elit, vel dignissim lorem congue ut. Aliquam dignissim risus sed dignissim tempus. Vivamus ut dapibus tellus. Curabitur lobortis porta semper. Aenean ex augue, lacinia at nunc ut, rutrum elementum risus. Phasellus efficitur eleifend sollicitudin. Aenean ut bibendum tellus, eget luctus eros.
<br/><br/>
Nullam hendrerit malesuada massa a interdum. Aliquam erat volutpat. Morbi luctus dui ut consequat malesuada. Praesent molestie quam vitae viverra ultrices. Etiam rhoncus semper est et aliquam. Suspendisse in quam vel dolor fringilla molestie. Suspendisse lacinia ultrices arcu, ac dapibus tellus feugiat gravida.
<br/><br/>
Aenean sapien quam, molestie nec mollis id, ultrices ac arcu. Nunc et diam sit amet tellus dignissim placerat. Aliquam at lacus convallis, volutpat sem feugiat, posuere lectus. Duis ante mi, rutrum sit amet quam eu, ultrices elementum felis. Aliquam lacinia lorem turpis, eu rhoncus mauris vestibulum at. Cras at erat in mi vehicula dignissim ut quis nulla. Nam porta quam ac lectus pellentesque dignissim. Curabitur vel sapien et libero imperdiet tincidunt quis id dolor. Donec accumsan vehicula commodo. Donec id venenatis sapien, quis malesuada ligula. Pellentesque tempor dolor sed ipsum ultricies lobortis sed vel dui. Sed id enim mattis, ullamcorper mauris rutrum, scelerisque lectus. Quisque ornare elit sit amet ullamcorper consequat. Quisque eget lobortis erat. Integer scelerisque nunc eu pharetra maximus.
<br/><br/>
Nam facilisis ligula velit, vitae elementum diam auctor vel. Sed tincidunt diam a congue efficitur. Donec sed nisl iaculis, scelerisque massa ac, tempor sapien. Sed pellentesque purus at massa finibus tempus. Nullam vehicula dui vitae nibh iaculis, id egestas augue venenatis. Sed urna lacus, molestie ac convallis sit amet, luctus vel leo. Aenean sed enim non quam auctor mollis eget in dolor. Praesent sed erat et leo malesuada laoreet a vitae massa. Duis id lobortis dui, eu ornare odio. Etiam bibendum semper ultricies. Mauris faucibus, libero imperdiet tristique accumsan, dolor enim aliquet eros, quis gravida massa urna vel erat. Pellentesque cursus, tortor et ultrices finibus, velit velit finibus diam, eget blandit justo arcu eget purus.
<br/><br/>
Etiam nunc velit, sodales eget dapibus vitae, euismod vitae lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec risus risus, tincidunt tincidunt cursus ultrices, pharetra vitae ante. Pellentesque sed sapien feugiat, cursus massa vel, mollis nibh. Nulla eget facilisis massa. Duis nulla tortor, hendrerit at augue sit amet, dignissim ultricies orci. Donec cursus sed tortor eget rutrum. Sed condimentum eu est quis commodo.
<br/><br/>
Morbi vel lacinia sapien, non commodo purus. Etiam et felis et arcu ultricies commodo id non leo. Aliquam eget leo sed sapien dapibus lacinia. Integer bibendum vel mi in iaculis. Aliquam bibendum arcu eu neque eleifend elementum. Cras scelerisque arcu et tristique rhoncus. Vestibulum dapibus mauris eget sem vulputate, sit amet commodo purus ultrices. Nam consequat turpis non odio vulputate interdum. Pellentesque dapibus ex sed nibh volutpat, nec maximus tellus scelerisque. Curabitur fermentum tempus bibendum. In in sagittis nulla.
<br/><br/>
Suspendisse ligula lectus, dapibus convallis rutrum eu, feugiat at risus. Nulla euismod ante erat, in consectetur tortor vestibulum viverra. Maecenas ut volutpat nibh. Etiam pharetra suscipit urna. Pellentesque a suscipit odio. Pellentesque a condimentum enim. Etiam blandit massa vitae massa dignissim aliquet. Aliquam dapibus non urna nec fermentum. Fusce sit amet ligula vel mi dignissim egestas. Praesent rutrum vulputate placerat. Nullam ex orci, malesuada sit amet consequat quis, tincidunt ut ligula. Nam tempus finibus mi, ac suscipit urna porta sed. Cras laoreet vestibulum turpis, et molestie turpis placerat in. Maecenas nec risus at dolor finibus bibendum ut vitae urna. In velit mi, porttitor vel placerat in, accumsan quis eros. Aliquam at purus leo.
<br/><br/>
Donec quis mattis libero, sed fringilla lorem. Suspendisse velit augue, laoreet sed consequat ut, pellentesque pulvinar neque. Phasellus interdum, erat quis faucibus rutrum, leo nisi lobortis velit, vel fringilla nunc mauris eu lacus. Sed aliquet accumsan nibh eget ullamcorper. In porta interdum justo, at pellentesque magna dapibus eu. Quisque consequat a ex quis accumsan. Donec vehicula magna sed mauris varius ultrices. Sed auctor ex sem, vel consectetur elit feugiat quis. Pellentesque pellentesque ante quis ex dictum bibendum.
<br/><br/>
Phasellus ut urna luctus, lobortis ante vitae, condimentum urna. Sed tincidunt venenatis elit, in finibus neque cursus eu. Nunc gravida tincidunt ullamcorper. Cras eget lacus sapien. Aenean tincidunt lobortis posuere. Proin faucibus sapien non eleifend aliquet. Etiam commodo lacus in neque varius rhoncus.
`;

const body = document.querySelector("body");

body.append(texto);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");

body.append(progressBar);

// función que haga el cálculo
const calcularPorcentajeScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;
  // console.log({ scrollTop, scrollHeight, clientHeight });

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// streams
const scroll$ = fromEvent(document, "scroll");
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
  // map((event) => calcularPorcentajeScroll(event)));
  map(calcularPorcentajeScroll)
  // tap(console.log)
);

progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});
