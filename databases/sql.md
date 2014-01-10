displaying info from single column in sql:
———————————————————

```
columnA:
 - id

ex. row:
 - {id:1}
```

statement:

```
(all on one line) ->

SELECT <x>.<id> AS <y>     

FROM <x> 

WHERE <x>.<val> = <something>  

```

displaying info from multiple columns in sql:
———————————————————

statement:

```
(all on one line) ->

SELECT <x>.<data> AS <data>, <z>.<data> as <data>     

LEFT JOIN <z> ON <z>.<id> = <x>.<id> 

FROM <x> 

WHERE <x>.<val> = <something>   

```

displaying info where there are multiple same ids in a column:
———————————————————

```
columnA:
 - id

ex. row:
 - {id:1}

columnB:
 - id
 - columnAId

ex. row:
 - {id:1, columnAId:1}

columnC:
 - id
 - columnBId

ex row:
 - [{id:1, columnBId:1}, {id:2, columnBId:1}]
```

statement:

```
(all on one line) ->

SELECT <x>.<data> AS <data>, <z>.<data> as <data>     

LEFT JOIN <z> ON <z>.<id> = <x>.<id> 

INNER JOIN (select <t>, <u>, <v> where <w>=<n>) AS <a> ON <a>.<id> = <x>.<id>

FROM <x> 

WHERE <x>.<val> = <something>   
```