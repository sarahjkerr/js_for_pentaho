# js_for_pentaho
JS snippets for Pentaho spoon transformations

In Pentaho ETL flows you can add a [javascript](https://help.pentaho.com/Documentation/8.2/Products/Data_Integration/Transformation_Step_Reference/Modified_Java_Script_Value) step to streamline data transformation.

Pentaho uses Rhino, so objects and methods can't be used in transformation steps. So, while using a single JS step can save a
ton of time adding other steps to accomplish some basic string cleaning/comparsion, it should be noted that the actual code
won't be super elegant.
