/** Dutch */
PrimeFaces.locales['nl'] = {
    closeText: 'Sluit',
    prevText: 'Terug',
    nextText: 'Volgende',
    currentText: 'Huidig',
    monthNames: ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'],
    monthNamesShort: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
    dayNames: ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'],
    dayNamesShort: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
    dayNamesMin: ['Zo', 'Ma', 'Di', 'Wo ', 'Do', 'Vr ', 'Za'],
    weekHeader: 'Week',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: '',
    timeOnlyTitle: 'Alleen tijd',
    timeText: 'Tijd',
    hourText: 'Uur',
    minuteText: 'Minuut',
    secondText: 'Seconde',
    millisecondText: 'Milliseconde',
    ampm: false,
    month: 'Maand',
    week: 'Week',
    day: 'Dag',
    allDayText: 'Alle dagen',
    today: 'Vandaag',
    clear: 'Wissen',
    aria: {
        'paginator.PAGE': 'Pagina {0}',
        'calendar.BUTTON': 'Toon kalender',
        'datatable.sort.ASC': 'Kolom oplopend sorteren',
        'datatable.sort.DESC': 'Kolom aflopend sorteren',
        'datatable.sort.NONE': 'Kolomsortering opheffen',
        'columntoggler.CLOSE': 'Sluit',
        'overlaypanel.CLOSE': 'Sluit'
    },
    messages: { //optional for Client Side Validation
        'javax.faces.component.UIInput.REQUIRED': '{0}: Validatiefout: Waarde is vereist.',
        'javax.faces.converter.IntegerConverter.INTEGER': '{2}: \'{0}\' moet een getal zijn van één of meer cijfers.',
        'javax.faces.converter.IntegerConverter.INTEGER_detail': '{2}: \'{0}\' moet een getal zijn tussen -2147483648 en 2147483647. Voorbeeld: {1}.',
        'javax.faces.converter.DoubleConverter.DOUBLE': '{2}: \'{0}\' moet een getal zijn van één of meer cijfers.',
        'javax.faces.converter.DoubleConverter.DOUBLE_detail': '{2}: \'{0}\' moet een getal zijn tussen 4.9E-324 en 1.7976931348623157E308. Voorbeeld: {1}.',
        'javax.faces.converter.BigDecimalConverter.DECIMAL': '{2}: \'{0}\' moet een decimaal getal met teken zijn.',
        'javax.faces.converter.BigDecimalConverter.DECIMAL_detail': '{2}: \'{0}\' moet een decimaal getal met teken zijn dat bestaat uit nul of meer cijfers, eventueel gevolgd door cijfers achter een komma. Voorbeeld: {1}.',
        'javax.faces.converter.BigIntegerConverter.BIGINTEGER': '{2}: \'{0}\' moet een getal zijn van één of meer cijfers.',
        'javax.faces.converter.BigIntegerConverter.BIGINTEGER_detail': '{2}: \'{0}\' moet een getal zijn van één of meer cijfers. Voorbeeld: {1}.',
        'javax.faces.converter.ByteConverter.BYTE': '{2}: \'{0}\' moet een getal zijn tussen 0 en 255.',
        'javax.faces.converter.ByteConverter.BYTE_detail': '{2}: \'{0}\' moet een getal zijn tussen 0 en 255. Voorbeeld: {1}.',
        'javax.faces.converter.CharacterConverter.CHARACTER': '{1}: \'{0}\' moet een geldig teken zijn.',
        'javax.faces.converter.CharacterConverter.CHARACTER_detail': '{1}: \'{0}\' moet een geldig ASCII-karakter zijn.',
        'javax.faces.converter.ShortConverter.SHORT': '{2}: \'{0}\' moet een getal zijn van één of meer cijfers.',
        'javax.faces.converter.ShortConverter.SHORT_detail': '{2}: \'{0}\' moet een getal zijn tussen -32768 en 32767. Voorbeeld: {1}.',
        'javax.faces.converter.BooleanConverter.BOOLEAN': '{1}: \'{0}\' moet \'true\' (waar) of \'false\' (niet waar) zijn.',
        'javax.faces.converter.BooleanConverter.BOOLEAN_detail': '{1}: \'{0}\' moet \'true\' (waar) of \'false\' (niet waar) zijn. Waarden anders dan \'true\' (waar) worden geinterpreteerd als \'false\' (niet waar).',
        'javax.faces.validator.LongRangeValidator.MAXIMUM': '{1}: Validatiefout: Waarde is hoger dan het toegestane maximum van \'{0}\'.',
        'javax.faces.validator.LongRangeValidator.MINIMUM': '{1}: Validatiefout: Waarde is lager dan het toegestane minimum van \'{0}\'.',
        'javax.faces.validator.LongRangeValidator.NOT_IN_RANGE': '{2}: Validatiefout: Waarde valt niet binnen de toegestane reeks van {0} tot {1}.',
        'javax.faces.validator.LongRangeValidator.TYPE': '{0}: Validatiefout: Waarde is niet van het juiste type.',
        'javax.faces.validator.DoubleRangeValidator.MAXIMUM': '{1}: Validatiefout: Waarde is hoger dan het toegestane maximum van \'{0}\'.',
        'javax.faces.validator.DoubleRangeValidator.MINIMUM': '{1}: Validatiefout: Waarde is lager dan het toegestane minimum van \'{0}\'.',
        'javax.faces.validator.DoubleRangeValidator.NOT_IN_RANGE': '{2}: Validatiefout: Waarde valt niet binnen de toegestane reeks van {0} tot {1}.',
        'javax.faces.validator.DoubleRangeValidator.TYPE': '{0}: Validatiefout: Waarde is niet van het juiste type.',
        'javax.faces.converter.FloatConverter.FLOAT': '{2}: \'{0}\' moet een getal zijn van één of meer cijfers.',
        'javax.faces.converter.FloatConverter.FLOAT_detail': '{2}: \'{0}\' moet een getal zijn tussen 1.4E-45 en 3.4028235E38  Voorbeeld: {1}.',
        'javax.faces.converter.DateTimeConverter.DATE': '{2}: \'{0}\' werd niet begrepen als een datum.',
        'javax.faces.converter.DateTimeConverter.DATE_detail': '{2}: \'{0}\' werd niet begrepen als een datum. Voorbeeld: {1}.',
        'javax.faces.converter.DateTimeConverter.TIME': '{2}: \'{0}\' werd niet begrepen als een tijd.',
        'javax.faces.converter.DateTimeConverter.TIME_detail': '{2}: \'{0}\' werd niet begrepen als een tijd. Voorbeeld: {1}.',
        'javax.faces.converter.DateTimeConverter.DATETIME': '{2}: \'{0}\' werd niet begrepen als een datum en tijd.',
        'javax.faces.converter.DateTimeConverter.DATETIME_detail': '{2}: \'{0}\' werd niet begrepen als een datum en tijd. Voorbeeld: {1}.',
        'javax.faces.converter.DateTimeConverter.PATTERN_TYPE': '{1}: Een \'pattern\' (patroon) of \'type\' attribuut zijn nodig om de waarde \'{0}\' te converteren.',
        'javax.faces.converter.NumberConverter.CURRENCY': '{2}: \'{0}\' werd niet begrepen als een valutawaarde.',
        'javax.faces.converter.NumberConverter.CURRENCY_detail': '{2}: \'{0}\' werd niet begrepen als een valutawaarde. Voorbeeld: {1}.',
        'javax.faces.converter.NumberConverter.PERCENT': '{2}: \'{0}\' werd niet begrepen als een percentage.',
        'javax.faces.converter.NumberConverter.PERCENT_detail': '{2}: \'{0}\' werd niet begrepen als een percentage. Voorbeeld: {1}.',
        'javax.faces.converter.NumberConverter.NUMBER': '{2}: \'{0}\' werd niet begrepen als een getal.',
        'javax.faces.converter.NumberConverter.NUMBER_detail': '{2}: \'{0}\' werd niet begrepen als een getal. Voorbeeld: {1}.',
        'javax.faces.converter.NumberConverter.PATTERN': '{2}: \'{0}\' werd niet begrepen als een getalpatroon.',
        'javax.faces.converter.NumberConverter.PATTERN_detail': '{2}: \'{0}\' werd niet begrepen als een getalpatroon. Voorbeeld: {1}.',
        'javax.faces.validator.LengthValidator.MINIMUM': '{1}: Validatiefout: Lengte is lager dan het toegestane minimum van \'{0}\'.',
        'javax.faces.validator.LengthValidator.MAXIMUM': '{1}: Validatiefout: Lengte is hoger dan het toegestane minimum van \'{0}\'.',
        'javax.faces.validator.RegexValidator.PATTERN_NOT_SET': 'Patroon van de reguliere expressie moet zijn gezet.',
        'javax.faces.validator.RegexValidator.PATTERN_NOT_SET_detail': 'Patroon van de reguliere expressie moet zijn gezet en mag niet leeg zijn.',
        'javax.faces.validator.RegexValidator.NOT_MATCHED': 'Patroon van de reguliere expressie komt niet overeen.',
        'javax.faces.validator.RegexValidator.NOT_MATCHED_detail': 'Patroon van de reguliere expressie \'{0}\' komt niet overeen.',
        'javax.faces.validator.RegexValidator.MATCH_EXCEPTION': 'Fout in reguliere expressie.',
        'javax.faces.validator.RegexValidator.MATCH_EXCEPTION_detail': 'Fout in reguliere expressie, \'{0}\'.',
        //optional for bean validation integration in client side validation
        'javax.faces.validator.BeanValidator.MESSAGE': '{0}',
        'javax.validation.constraints.AssertFalse.message': 'moet false (niet waar) zijn.',
        'javax.validation.constraints.AssertTrue.message': 'moet true (waar) zijn.',
        'javax.validation.constraints.DecimalMax.message': 'moet kleiner dan of gelijk aan zijn aan {0}.',
        'javax.validation.constraints.DecimalMin.message': 'moet groter dan of gelijk aan zijn aan {0}.',
        'javax.validation.constraints.Digits.message': 'getal valt buiten het domein (&lt;{0} waarde&gt;.&lt;{1} waarde&gt; verwacht).',
        'javax.validation.constraints.Future.message': 'moet in de toekomst zijn.',
        'javax.validation.constraints.Max.message': 'moet kleiner dan of gelijk aan zijn aan {0}.',
        'javax.validation.constraints.Min.message': 'moet groter dan of gelijk aan zijn aan {0}.',
        'javax.validation.constraints.NotNull.message': 'mag niet null (nihil) zijn.',
        'javax.validation.constraints.Null.message': 'moet null (nihil) zijn.',
        'javax.validation.constraints.Past.message': 'moet in het verleden zijn.',
        'javax.validation.constraints.Pattern.message': 'moet overeenkomen met "{0}".',
        'javax.validation.constraints.Size.message': 'grootte moet tussen {0} en {1} zijn.'
    }
 };

