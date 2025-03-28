const Tariffs = () => {
    return (
      <main className="container mx-auto px-4 mt-[60px] sm:mt-[80px] md:mt-[100px]">
        <h1 className="text-[32px] sm:text-[40px] md:text-[50px] font-bold text-[#0060AE] mb-6">Тарифы</h1>
  
        <div className="my-[30px] sm:my-[40px] md:my-[50px] overflow-x-auto">
          <table className="min-w-[700px] w-full rounded-2xl border-separate border-spacing-2 bg-[#E6F7FF] border border-gray-300 text-sm sm:text-[15px] md:text-base">
            <thead>
              <tr>
                <th className="p-4 text-[#0060AE] whitespace-nowrap">КУДА</th>
                <th className="p-4 text-[#0060AE] whitespace-nowrap">ЭКСПРЕСС</th>
                <th className="p-4 text-[#0060AE] whitespace-nowrap">СТАНДАРТ</th>
                <th className="p-4 text-[#0060AE] whitespace-nowrap">УЛЬТРА</th>
                <th className="p-4 text-[#0060AE] whitespace-nowrap">АВТО</th>
                <th className="p-4 text-[#0060AE] whitespace-nowrap">АВТО-ЭКОНОМ</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Узбекистан (Ташкент)', '12$', '7$\nмин. оплата 2 кг', '30$', '5$\nмин. оплата 5 кг', '200 ₽\nмин. оплата 10 кг'],
                ['Таджикистан (Душанбе)', '700 ₽', '450 ₽', '1700 ₽', '170 ₽\nмин. оплата 10 кг', ''],
                ['Кыргызстан (Бишкек)', '500 ₽\nпервый кг 1100 ₽', '—', '1800 ₽', '150 ₽\nмин. оплата 10 кг', ''],
                ['Казахстан (Алматы)', '1000 ₽\nмин. оплата 2 кг', '—', '1700 ₽', '150 ₽\nмин. оплата 10 кг', ''],
                ['Турция (Стамбул)', '1500 ₽\nмин. оплата 2 кг', '—', '2700 ₽', '—', ''],
              ].map((row, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-50 text-center">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="border-gray-300 rounded-lg p-3 sm:p-4 whitespace-pre-line text-[12px] sm:text-[13px] text-center">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        <p className="text-[12px] sm:text-[13px] leading-relaxed">
          Цены указаны только для отправки личных вещей от ПВЗ до ПВЗ.<br />
          По направлению Россия — Узбекистан по тарифам СТАНДАРТ и АВТО-ЭКОНОМ для оформления груза требуется фото/скан паспорта получателя.<br />
          Стоимость и сроки перевозки коммерческих изделий, а также дорогостоящих изделий свыше 250$ рассчитывается с менеджером по согласованию.<br />
          Возможна доплата за габариты посылки при превышении суммы сторон 100 см.<br />
          Возможна доставка во все регионы страны-доставки.
        </p>
      </main>
    )
  }
  
  export default Tariffs