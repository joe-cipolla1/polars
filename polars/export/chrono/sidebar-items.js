window.SIDEBAR_ITEMS = {"constant":[["MAX_DATE","The maximum possible `Date`."],["MAX_DATETIME","The maximum possible `DateTime<Utc>`."],["MIN_DATE","The minimum possible `Date`."],["MIN_DATETIME","The minimum possible `DateTime<Utc>`."]],"enum":[["LocalResult","The conversion result from the local time to the timezone-aware datetime types."],["Month","The month of the year."],["RoundingError","An error from rounding by `Duration`"],["SecondsFormat","Specific formatting options for seconds. This may be extended in the future, so exhaustive matching in external code is not recommended."],["Weekday","The day of week."]],"mod":[["format","Formatting (and parsing) utilities for date and time."],["naive","Date and time types unconcerned with timezones."],["offset","The time zone, which calculates offsets from the local time to UTC."],["prelude","A convenience module appropriate for glob imports (`use chrono::prelude::*;`)."]],"struct":[["Date","ISO 8601 calendar date with time zone."],["DateTime","ISO 8601 combined date and time with time zone."],["Duration","ISO 8601 time duration with nanosecond precision. This also allows for the negative duration; see individual methods for details."],["FixedOffset","The time zone with fixed offset, from UTC-23:59:59 to UTC+23:59:59."],["IsoWeek","ISO 8601 week."],["Local","The local timescale. This is implemented via the standard `time` crate."],["NaiveDate","ISO 8601 calendar date without timezone. Allows for every proleptic Gregorian date from Jan 1, 262145 BCE to Dec 31, 262143 CE. Also supports the conversion from ISO 8601 ordinal and week date."],["NaiveDateTime","ISO 8601 combined date and time without timezone."],["NaiveTime","ISO 8601 time without timezone. Allows for the nanosecond precision and optional leap second representation."],["ParseError","An error from the `parse` function."],["ParseMonthError","An error resulting from reading `<Month>` value with `FromStr`."],["ParseWeekdayError","An error resulting from reading `Weekday` value with `FromStr`."],["Utc","The UTC time zone. This is the most efficient time zone when you don’t need the local time. It is also used as an offset (which is also a dummy type)."]],"trait":[["Datelike","The common set of methods for date component."],["DurationRound","Extension trait for rounding or truncating a DateTime by a Duration."],["Offset","The offset from the local time to UTC."],["SubsecRound","Extension trait for subsecond rounding or truncation to a maximum number of digits. Rounding can be used to decrease the error variance when serializing/persisting to lower precision. Truncation is the default behavior in Chrono display formatting.  Either can be used to guarantee equality (e.g. for testing) when round-tripping through a lower precision format."],["TimeZone","The time zone."],["Timelike","The common set of methods for time component."]],"type":[["ParseResult","Same as `Result<T, ParseError>`."]]};