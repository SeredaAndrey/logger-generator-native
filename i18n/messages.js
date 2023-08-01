import { LOCALES } from "./locales";

export const messages = {
  [LOCALES.ENGLISH]: {
    welcome: "Welcome",

    des_dev: "design & development by Sereda Andrii",

    settings: "Settings",
    user_settings: "User settings",
    global_settings: "Global Setting",
    gen_settings: "Generator Setting",

    cycles: "Cycles",
    add_cycle: "Add cycle unit",
    report: "Show working report",

    name: `first name`,
    surname: "second name",
    email: "email address",
    change_mail_message:
      "if you change the email, the next login to the application using the specified email address",
    language: "interface language",

    submit: "Submit",

    brand: "Brand name generator",
    model: "Generator model",
    first_reglament: "First change of time oil reglament (hours)",
    next_reglament: "Next change of time oil reglament (hours)",
    power: "Electrical power generator (kW)",
    first_start: "Date of first start generator",
    before_first_start: "Time before first start generator (hours)",
    volume_oil: "Volume oil of generator (litre)",
    volume_fuel: "Volume of fuel tank generator (litre)",

    price_oil: "Price of engine oil",
    price_fuel: "Price of fuel",
    price_electr: "Price of electrical",

    patch_gen: "Patching settings",
    new_gen: "create new settings",

    create_cycle: "create new working cycle",
    patch_cycle: "patch working cycle",

    start: "Timestamp of start cycle generator",
    stop: "Timestamp of stop cycle generator",
    generated: "amount electricity generated per cycle",
    refueling: "amount fuel filled, specify when refueling",
    reoiling: "Change of oil",

    create: "create",
    patch: "patch",

    sorting: "sorting results",
    sort_data_start: "date start",
    sort_data_stop: "date stop",
    sort_sycle: "cycle time",
    sort_gen: "generation",

    show_from: "show report from:",
    show_to: "to:",

    calc_data: "Calculation data",
    calc_total_gen:
      "the amount of generated electricity for the entire period of operation and its estimated cost",
    calc_month_gen:
      "the amount of generated electricity and its estimated cost for the current month",
    calc_total_run: "total generator run time",
    calc_month_run: "generator run time last month",
    calc_oil_change: "time until next oil change",
    calc_fuel_consumpt: "average fuel consumption",
    calc_work_cost: "average cost per hour",
    h_m: "(hours:minutes)",
    kw: "(kW)",
    uahKwt: "(UAH/kW*h)",
    l_hour: "(l/hours)",
    uah_h: "(UAH/hours)",

    total_time: "total working time (h:m)",
    total_gen: "total generation power (kW)",
    total_refueling: "total refueling (litre)",
    total_reoiling: "total changing oil (times)",
  },
  [LOCALES.RUSSIAN]: {
    welcome: "Добро пожаловать",

    des_dev: "дизайн и разработка Середа Андрей",

    settings: "Настройки",
    user_settings: "Настройки пользователя",
    global_settings: "Общие настройки",
    gen_settings: "Настройки генератора",

    cycles: "Циклы",
    add_cycle: "Добавить робочий цикл",
    report: "Показать отчет",

    name: `Імя`,
    surname: "фамилия",
    email: "email адрес",
    change_mail_message:
      "Если будет изменен email, при следующем входе в приложение укажите актуальный email",
    language: "язык интерфейса",

    submit: "Сохранить",

    brand: "Название генератора",
    model: "Модель генератора",
    first_reglament: "Регламент первой замены масла (час)",
    next_reglament: "Регламент последующей замены масла (час)",
    power: "Электрическая мощность генератора (kW)",
    first_start: "Дата первого запуска генератора",
    before_first_start: "Наработка до первого запуска (час)",
    volume_oil: "Объем картера масла (литр)",
    volume_fuel: "объем топливного бака (литр)",

    price_oil: "Цена масла",
    price_fuel: "Цена топлива",
    price_electr: "Цена электроэнергии",

    patch_gen: "Обновить настройки",
    new_gen: "Создать новые настройки",

    create_cycle: "создание рабочего цикла",
    patch_cycle: "правка рабочего цикла",

    start: "Дата и время запуска цикла генератора",
    stop: "Дата и время остановки цикла генератора",
    generated: "Генерация электроэнергии за цикл",
    refueling: "заправка генератора, количество топлива",
    reoiling: "замена масла",

    create: "создать",
    patch: "изменить",

    sorting: "сортировка результатов",
    sort_data_start: "дата старта",
    sort_data_stop: "дата остановки",
    sort_sycle: "время работы",
    sort_gen: "генерация",

    show_from: "показать отчет с:",
    show_to: "по:",

    calc_data: "Глобальные данные",
    calc_total_gen:
      "количество сгенерированной электоэнергии за весь период работы и ее расчетная стоимость",
    calc_month_gen:
      "количество сгенерированной электоэнергии за текущий месяц и ее расчетная стоимость",
    calc_total_run: "общее время работы генератора за весь период",
    calc_month_run: "время работы генератора за текущий месяц",
    calc_oil_change: "время до следующей замены масла",
    calc_fuel_consumpt: "среднее потребление топлива",
    calc_work_cost: "середняя стоимость моточаса",
    h_m: "(часы:минуы)",
    kw: "(кВт)",
    uahKwt: "(грн/кВт*ч)",
    l_hour: "(литр/час)",
    uah_h: "(грн/час)",

    total_time: "общее время работы (ч:м)",
    total_gen: "общая генерация энергии (кВт)",
    total_refueling: "общее количество топлива (литр)",
    total_reoiling: "замена масла (раз)",
  },
  [LOCALES.UKRAINIAN]: {
    welcome: "Ласкаво просимо",

    des_dev: "дизайн та розробка Середа Андрій",

    settings: "Налаштування",
    user_settings: "Налашт. користувача",
    global_settings: "Загальні налашт.",
    gen_settings: "Налашт. генератора",

    cycles: "Цикли",
    add_cycle: "Додати робочий цикл",
    report: "Показати звіт",

    name: `Ім'я`,
    surname: "призвище",
    email: "email адреса",
    change_mail_message:
      "Якщо буде змінений email, при наступному вході в застосунок вкажіть актуальний email",
    language: "мова інтерфейсу",

    submit: "Зберегти",

    brand: "Назва генератора",
    model: "Модель генератора",
    first_reglament: "Регламент першої замени мастила (год)",
    next_reglament: "Регламент наступної замені мастила (год)",
    power: "Электрична потужність генератора (kW)",
    first_start: "Дата першого пуску генератора",
    before_first_start: "Напрацювання до первого пуску (год)",
    volume_oil: "Об єм картера мастила (літр)",
    volume_fuel: "об ем паливного баку (літр)",

    price_oil: "Вартість мастила",
    price_fuel: "Вартість палива",
    price_electr: "Вартість електроенергії",

    patch_gen: "Оновити налаштування",
    new_gen: "Створити нові налаштування",

    create_cycle: "створення робочего циклу",
    patch_cycle: "правка робочего циклу",

    start: "Дата та час пуску циклу генератора",
    stop: "Дата та час зупинки циклу генератора",
    generated: "Генерация електроенергії за цикл",
    refueling: "заправка генератора, кількість палива",
    reoiling: "заміна мастила",

    create: "створити",
    patch: "змінити",

    sorting: "сортування результатів",
    sort_data_start: "дата старту",
    sort_data_stop: "дата зупинки",
    sort_sycle: "час работи",
    sort_gen: "генерація",

    show_from: "відобразити звіт з:",
    show_to: "по:",

    calc_data: "Глобальні данні",
    calc_total_gen:
      "кількість сгенерованої електоенергії за весь період роботи та її розрахункова вартість",
    calc_month_gen:
      "кількість сгенерованої електоенергії за поточний місяць та її розрахункова вартість",
    calc_total_run: "загальний час роботи генератора за весь час",
    calc_month_run: "час роботи генератора за поточний місяць",
    calc_oil_change: "час до наступної заміни мастила",
    calc_fuel_consumpt: "середне споживання палива",
    calc_work_cost: "середня вартість мотогодини",
    h_m: "(години:хвилини)",
    kw: "(кВт)",
    uahKwt: "(грн/кВт*г)",
    l_hour: "(литр/година)",
    uah_h: "(грн/година)",

    total_time: "загальний час роботи (г:х)",
    total_gen: "загальна генерація енергії (кВт)",
    total_refueling: "загальна кількість палива (літр)",
    total_reoiling: "заміна мастила (разів)",
  },
};
