## Ejercicios sencillos 3

[apuntes](https://drive.google.com/open?id=13bNDS6c3sN3wVr0YrYo2i_Sy7xHwCHhu)

#### Ejercicio 1
Se quiere saber cuantas veces a la semana un grupo de personas consume comida rápida. Se pregunta a un conjunto de 25 personas y se obtienen los siguientes datos 

```
3 2 3 2 2 6 5 2 5 4 
2 3 4 4 4 4 3 4 3 5 
3 4 4 5 2 1
```

calcular:
- la media, la mediana
- los cuartiles 1 y 3 (<span v-katex="'Q_1'"></span> y <span v-katex="'Q_3'"></span>)
- el recorrido, el recorrido intercuartílico.
- la desviación mediana, la desviación media, la varianza

<!--
id: ejercicios_estadistica_20191011
tags: estadistica, teaching, ejercicios
title: Ejercicios sencillos 2019-10-11
date: 11/10/2019
-->

<!--
   Min. 1st Qu.  Median    Mean 3rd Qu.    Max. 
  1.000   2.250   3.500   3.423   4.000   6.000 ç

https://stat.ethz.ch/R-manual/R-devel/library/stats/html/mad.html


> var(x)
[1] 1.533846
> mad(x, center = median(x), constant = 1, na.rm = FALSE, low = FALSE, high = FALSE)
[1] 0.5
> mad(x, center = mean(x), constant = 1, na.rm = FALSE, low = FALSE, high = FALSE)
[1] 0.5769231


-->
