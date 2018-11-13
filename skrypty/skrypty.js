var powiekszone=false;
var menuStartOn=false;
var uruchomione=[];
var magazyn;
var folderOpen=false;
var notatnikOpen=false;
var galeriaOpen=false;
var kalkulatorOpen=false;
var galeria=1;//telefon ktory obrazek - licznik
function czas()
{
	var data=new Date();
	var godzina=data.getHours();
	var minuta=data.getMinutes();
	var rok=data.getFullYear();
	var miesiac=data.getMonth()+1; /*+1 bo miesiace od 0 do 11*/
	var dzien=data.getDate();
	var dzienNazwa=data.getDay();
	var dniTyg=["nd","pon","wt","śr","czw","pt","sob"]
	var zegar=document.getElementById("zegar");
	var zegarFon=document.getElementById("zegarFon");
	var zegarFonDuzy=document.getElementById("zegarFonDuzy");
	var dataFon=document.getElementById("dataFon");
	if(miesiac<10)
	{
		miesiac="0"+miesiac;
	}
	if(minuta<10)
	{
		minuta="0"+minuta;
	}
	if(godzina<10)
	{
		godzina="0"+godzina;
	}
	if(dzien<10)
	{
		dzien="0"+dzien;
	}
	zegar.innerHTML=godzina+":"+minuta+"<br>"+rok+"-"+miesiac+"-"+dzien;// desktop
	zegarFon.innerHTML=godzina+":"+minuta; // U.mobilne
	zegarFonDuzy.innerHTML=godzina+":"+minuta; // U.mobilne
	dataFon.innerHTML=dniTyg[dzienNazwa]+", "+miesiac+"."+dzien; // U.mobilne
	
	setInterval("czas()", 1000);
}
function otworzOkno(ikona,folder,okno)
{
	var zawartosc=document.getElementById("zawartoscFolder");
	var okienko=document.getElementById(okno);
	var ikonkaWfolder=document.getElementById("ikonkaWfolder");
	var ileElementow=document.getElementById("ileElementow");
	var urlIkona=document.getElementById("urlIkona");
	var urlFolder=document.getElementById("urlFolder");
	var procesy=document.getElementById("pasekZadanProcesy");
	var x;/*ilosc elementow w folderze*/
	var zawartoscNotatnik=document.getElementById("zawartoscNotatnik");
	okienko.style.display="block";
	if(okno=='kalkulator'&&kalkulatorOpen==false)
	{
		procesy.innerHTML+="<img onclick=\"otworzOkno('"+ikona+"','"+folder+"','"+okno+"')\" class=\"procesIkona kalkulator\" src=\"jpg/ikony/"+ikona+".png\"></img>";
		kalkulatorOpen=true;
	}
	if(okno=='folderMin'&&folderOpen==false)
	{
		procesy.innerHTML+="<img onclick=\"otworzOkno('"+ikona+"','"+folder+"','"+okno+"')\" class=\"procesIkona folder\" src=\"jpg/ikony/"+ikona+".png\"></img>";
		folderOpen=true;
	}
	if(ikona=='kosz')
	{
		document.getElementsByClassName("folder")[0].src="jpg/ikony/kosz.png";
	}
	if(ikona=='folder')
	{
		document.getElementsByClassName("folder")[0].src="jpg/ikony/folder.png";
	}
	if(okno=='notatnikMin'&&notatnikOpen==false)
	{
		procesy.innerHTML+="<img onclick=\"otworzOkno('"+ikona+"','"+folder+"','"+okno+"')\" class=\"procesIkona notatnik\" src=\"jpg/ikony/"+ikona+".png\"></img>";
		naglowekPlik.innerHTML=folder;
		zawartosc.innerHTML=magazyn;
		notatnikOpen=true;
		switch(folder)
		{
			case 'o mnie.txt':
				zawartoscNotatnik.innerHTML="Lorem ipsum dolor sit amet, minimum interesset pri at. Autem sanctus repudiare usu ne. Viris possim assentior an sit, dolorem fabellas volutpat ea per, at mea enim atqui utroque. Usu ea nostrud appetere fabellas, eos at quod democritum, no case meliore abhorreant mei. Quo id consul lobortis. Nec purto eripuit nostrum in, te saepe repudiare his, vitae labore gubergren eu duo. An sed labore aliquip splendide, graece latine ad eum. An diam voluptatibus his. An nostro oportere volutpat per. Regione delenit tibique ut sed, assum vituperata ut usu, quod semper sea id. Eu tibique fastidii mel, pro an esse nibh contentiones, perfecto expetendis delicatissimi id qui. Vero saepe vivendum sit et, eu nihil possit copiosae eam. Per in copiosae constituam, pri veniam utinam legendos ea. Eam et facete oblique, at probo impetus convenire usu, mei no iriure integre instructior. Ius ne quas vituperata. Blandit senserit persecuti et per, nihil graece deleniti usu et. Iusto suscipit splendide vel ne, mollis vulputate ex quo, qui ut offendit laboramus. Pos";
				break;
			case 'kontakt.txt':
				zawartoscNotatnik.innerHTML="e-mail: <a href=\"mailto:dominik.klaczany@gmail.com\">dominik.klaczany@gmail.com</a>";
				break;
			case 'linki.txt':
				zawartoscNotatnik.innerHTML="1. Projekt nr.1 - opis projektu";
				break;
			default:
			{
				alert("blad")
			}
		}
	magazyn=zawartosc.innerHTML;//bo po otwarciu notatnika tracimy zawartość folder
	}
	if(okno=='galeriaMin'&&galeriaOpen==false)
	{
		procesy.innerHTML+="<img onclick=\"otworzOkno('"+ikona+"','"+folder+"','"+okno+"')\" class=\"procesIkona galeria\" src=\"jpg/ikony/"+ikona+".png\"></img>";
		naglowekGaleria.innerHTML=folder;
		zawartosc.innerHTML=magazyn;
		galeriaOpen=true;
		switch(folder)
		{
			case 'twarz.jpg':
			
				zawartoscGaleria.innerHTML="<img id=\"obraz\" src=\"jpg/twarz.jpg\"></img>";
				break;
			case 'autoklinika.jpg':
				zawartoscGaleria.innerHTML="<img id=\"obraz\" src=\"jpg/autoklinika.png\"></img>";
				break;
			case 'portfolio.jpg':
				zawartoscGaleria.innerHTML="<img id=\"obraz\" src=\"jpg/portfolio.png\"></img>";
				break;
			case 'html.png':
				zawartoscGaleria.innerHTML="<img id=\"obraz\" src=\"jpg/html.png\"></img>";
				break;
			case 'css.png':
				zawartoscGaleria.innerHTML="<img id=\"obraz\" src=\"jpg/css.png\"></img>";
				break;
			case 'js.png':
				zawartoscGaleria.innerHTML="<img id=\"obraz\" src=\"jpg/js.png\"></img>";
				break;
			case 'bootstrap.png':
				zawartoscGaleria.innerHTML="<img id=\"obraz\" src=\"jpg/bootstrap.png\"></img>";
				break;
			case 'bulma.png':
				zawartoscGaleria.innerHTML="<img id=\"obraz\" src=\"jpg/bulma.png\"></img>";
				break;
			default:
			{
				zawartoscGaleria.innerHTML="";
			}
		}
	}
	if(okno=='folderMin')
	{
		zawartosc.innerHTML="";
		switch(folder)
		{
			case 'Kosz':
				x=0;
				break;
			case 'O mnie':
				zawartosc.innerHTML+="<div ondblclick=\"otworzOkno('dokumenty','o mnie.txt','notatnikMin')\" class=\"ikonka textIkonaWfolder\"><img class=\"ikonkaImg\" src=\"jpg/ikony/dokumenty.png\"></img><br>o mnie.txt</div>";
				x=1;
				break;
			case 'Kontakt':
				zawartosc.innerHTML+="<div ondblclick=\"otworzOkno('dokumenty','kontakt.txt','notatnikMin')\" class=\"ikonka textIkonaWfolder\"><img class=\"ikonkaImg\" src=\"jpg/ikony/dokumenty.png\"></img><br>kontakt.txt</div>";
				x=1;
				break;
			case 'Projekty':
				zawartosc.innerHTML+="<div ondblclick=\"otworzOkno('dokumenty','linki.txt','notatnikMin')\" class=\"ikonka textIkonaWfolder\"><img class=\"ikonkaImg\" src=\"jpg/ikony/dokumenty.png\"></img><br>linki.txt</div>";
				x=3;
				break;
			case 'Technologie':
				zawartosc.innerHTML+="<div ondblclick=\"otworzOkno('obrazy','html.png','galeriaMin')\" class=\"ikonka textIkonaWfolder\"><img class=\"ikonkaImg\" src=\"jpg/ikony/obrazy.png\"></img><br>html.png</div>";
				zawartosc.innerHTML+="<div ondblclick=\"otworzOkno('obrazy','css.png','galeriaMin')\" class=\"ikonka textIkonaWfolder\"><img class=\"ikonkaImg\" src=\"jpg/ikony/obrazy.png\"></img><br>css.png</div>";
				zawartosc.innerHTML+="<div ondblclick=\"otworzOkno('obrazy','js.png','galeriaMin')\" class=\"ikonka textIkonaWfolder\"><img class=\"ikonkaImg\" src=\"jpg/ikony/obrazy.png\"></img><br>js.png</div>";
				zawartosc.innerHTML+="<div ondblclick=\"otworzOkno('obrazy','bootstrap.png','galeriaMin')\" class=\"ikonka textIkonaWfolder\"><img class=\"ikonkaImg\" src=\"jpg/ikony/obrazy.png\"></img><br>bootstrap.png</div>";
				zawartosc.innerHTML+="<div ondblclick=\"otworzOkno('obrazy','bulma.png','galeriaMin')\" class=\"ikonka textIkonaWfolder\"><img class=\"ikonkaImg\" src=\"jpg/ikony/obrazy.png\"></img><br>bulma.png</div>";
				x=5;
				break;
			default:
			{
				alert("Coś się zdupcyło");
			}
		}
		ileElementow.innerHTML="Elementów: "+x;
		urlIkona.innerHTML="<img style=\"height:1.9vh;margin-top:0.5vh\" src=\"jpg/ikony/"+ikona+".png\"></img>";
		urlFolder.innerHTML=folder;
		ikonkaWfolder.src="jpg/ikony/"+ikona+".png";
		magazyn=zawartosc.innerHTML;//bo po otwarciu notatnika tracimy zawartość folderu
	}
}
function zamknijOkno(okno,co)
{
	var obiekt=document.getElementById(okno);
	var pasek=document.getElementById(co);
	var folder=document.getElementsByClassName("folder");
	var notatnik=document.getElementsByClassName("notatnik");
	var galeria=document.getElementsByClassName("galeria");
	var logo=document.getElementsByClassName("zmienLogo");
	var kalkulator=document.getElementsByClassName("kalkulator");
	if(co=='folder')
	{
		for(i=0;i<folder.length;i++)
		{	
			folder[i].style.display="none";
		}
			obiekt.style.display="none";
		folderOpen=false;
	}
	if(co=='notatnik')
	{
		for(i=0;i<notatnik.length;i++)
		{	
			notatnik[i].style.display="none";
		}
			obiekt.style.display="none";
		notatnikOpen=false;
	}
	if(co=='galeria')
	{
		for(i=0;i<galeria.length;i++)
		{	
			galeria[i].style.display="none";
		}
			obiekt.style.display="none";
		galeriaOpen=false;
	}
	if(co=='logo')
	{
		for(i=0;i<logo.length;i++)
		{	
			logo[i].style.display="none";
		}
			obiekt.style.display="none";
	}
	if(co=='kalkulator')
	{
		for(i=0;i<kalkulator.length;i++)
		{	
			kalkulator[i].style.display="none";
		}
			obiekt.style.display="none";
		kalkulatorOpen=false;
	}
}
function powiekszOkno(okno)
{
	var okienko=document.getElementById(okno);
	if(powiekszone==false)
	{
		okienko.style="top:0;left:0;height:95vh;width:99.7vw;display:block";
		document.getElementById("szukajFolder").style="height:3.4%;";
		powiekszone=true;
	}
	else
	{
		okienko.style="top:12vh;left:20vw;height:70vh;width:63vw;display:block";
		powiekszone=false;
	}
}
function minimalizujOkno(okno)
{
	var obiekt=document.getElementById(okno);
	obiekt.style.display="none";
}
function menuStart()
{
	if(menuStartOn==false)
	{
		document.getElementById("menuStart").style.display="block";
		menuStartOn=true;
	}
	else
	{
		document.getElementById("menuStart").style.display="none";
		menuStartOn=false;
	}
}
function zmienLogo(x)
{
	var logo = document.getElementById("praweMenuStartLogo");
	logo.style="background-image:url('jpg/logo/"+x+".jpeg')";
}
//kalkulator
var dzialanieOn=false;
var obieg=0;
function wypisz(x)
{
	var ekran=document.getElementById("ekranKalkulator");
	var ekranFon=document.getElementById("ekranKalkulatorFon");
	
	if(obieg==0&&x==0)
	{
		
	}
	else
	{
		if(x!='+' && x!='-' && x!='*' && x!='/' && obieg==0 && x!='.')
		{
			ekran.innerHTML=x;
			ekranFon.innerHTML=x;
		}
		else
		{
			if(x=="*"||x=="/"||x=="+"||x=="-")
			{
				if(dzialanieOn==false)
				{
					ekran.innerHTML+=x;
					ekranFon.innerHTML+=x;
					dzialanieOn=true;
				}
				else
				{
					oblicz();
					dzialanieOn=false;
					wypisz(x);
				}
			}
			else
			{
				ekran.innerHTML+=x;
				ekranFon.innerHTML+=x;
			}
			
			
			if(ekran.innerHTML.length>16)
			{
				ekran.style="font-size:2vh;";
			}
			if(ekran.innerHTML.length>20)
			{
				ekran.style="font-size:1.5vh;";
				oblicz();
			}
		}
	obieg++;
	}
}
function oblicz()
{
	var ekran=document.getElementById("ekranKalkulator");
	var ekranFon=document.getElementById("ekranKalkulatorFon");
	ekran.innerHTML=eval(ekran.innerHTML);
	ekranFon.innerHTML=eval(ekran.innerHTML);
	dzialanieOn=false;
	obieg=0;
}
function wyczysc()
{
	document.getElementById("ekranKalkulator").innerHTML="0";
	document.getElementById("ekranKalkulatorFon").innerHTML="0";
	dzialanieOn=false;
	obieg=0;
}
function wsteczFon()
{
	document.getElementById("oMnieFon").style="display:none";
	document.getElementById("kontaktFon").style="display:none";
	document.getElementById("kalkulatorFon").style="display:none";
	document.getElementById("technologieFon").style="display:none";
}
function oMnieFon()
{
	document.getElementById("oMnieFon").style="display:block";
}
function kontaktFon()
{
	document.getElementById("kontaktFon").style="display:block";
}
function kalkulatorFon()
{
	document.getElementById("kalkulatorFon").style="display:block";
}
function technologieFon()
{
	document.getElementById("technologieFon").style="display:block";
}
function zmienObraz(x)
{
	var galeriaImg=document.getElementById("technologieFonImg");
	if(x=='l')
	{
		if(galeria==1)
		{
			galeria=5;
		}
		else
		{
			galeria--;
		}
	}
	if(x=='p')
	{
		if(galeria==5)
		{
			galeria=1;
		}
		else
		{
			galeria++;
		}
	}
	switch(galeria)
	{
		case 1:
		{
			galeriaImg.src="jpg/html.png";
			break;
		}
		case 2:
		{
			galeriaImg.src="jpg/css.png";
			break;
		}
		case 3:
		{
			galeriaImg.src="jpg/js.png";
			break;
		}
		case 4:
		{
			galeriaImg.src="jpg/bulma.png";
			break;
		}
		case 5:
		{
			galeriaImg.src="jpg/bootstrap.png";
			break;
		}
		default:
		{
			alert("cos nie dziala"+galeria);
		}
	}
}













