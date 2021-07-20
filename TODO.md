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
