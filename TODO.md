# TODO

- [ ] Нужен еще один слой Create как и для Patch?

- [ ] Нужно ли типизировать template литералами href в meta?

    Подобная типизация позволит, к примеру, проверить, что корректно указаны
    пользовательские аттрибуты в поле `attributes` по типу сущности в href

- [ ] Переделать тип `EndpointInterface` (response зависит не только от Method
      и Endpoint, но и от Payload).

      Скорее всего нужно ввести типы:
        - `PayloadType<Method, Endpoint>`
        - `ResponseType<Method, Endpoint, Payload>`

- [ ] Возможно имеет смысл выносить поля не по типу обекта по по его смысловой
      группе. Например, все доменные сущности.

- [ ] [Tail-Recursion Elimination on Conditional Types](https://devblogs.microsoft.com/typescript/announcing-typescript-4-5-beta/#tailrec-conditional) - будет ли полезно?
