﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Bekap_4
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Товар.
    /// </summary>
    // *** Start programmer edit section *** (Товар CustomAttributes)

    // *** End programmer edit section *** (Товар CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТоварE", new string[] {
            "Наименование as \'Производитель\'",
            "КодМатериала as \'Код материала\'",
            "Производитель as \'Наименование\'"})]
    [View("ТоварL", new string[] {
            "Наименование as \'Производитель\'",
            "КодМатериала as \'Код материала\'",
            "Производитель as \'Наименование\'"})]
    public class Товар : ICSSoft.STORMNET.DataObject
    {
        
        private string fПроизводитель;
        
        private int fКодМатериала;
        
        private string fНаименование;
        
        // *** Start programmer edit section *** (Товар CustomMembers)

        // *** End programmer edit section *** (Товар CustomMembers)

        
        /// <summary>
        /// КодМатериала.
        /// </summary>
        // *** Start programmer edit section *** (Товар.КодМатериала CustomAttributes)

        // *** End programmer edit section *** (Товар.КодМатериала CustomAttributes)
        public virtual int КодМатериала
        {
            get
            {
                // *** Start programmer edit section *** (Товар.КодМатериала Get start)

                // *** End programmer edit section *** (Товар.КодМатериала Get start)
                int result = this.fКодМатериала;
                // *** Start programmer edit section *** (Товар.КодМатериала Get end)

                // *** End programmer edit section *** (Товар.КодМатериала Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товар.КодМатериала Set start)

                // *** End programmer edit section *** (Товар.КодМатериала Set start)
                this.fКодМатериала = value;
                // *** Start programmer edit section *** (Товар.КодМатериала Set end)

                // *** End programmer edit section *** (Товар.КодМатериала Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Товар.Наименование CustomAttributes)

        // *** End programmer edit section *** (Товар.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Товар.Наименование Get start)

                // *** End programmer edit section *** (Товар.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Товар.Наименование Get end)

                // *** End programmer edit section *** (Товар.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товар.Наименование Set start)

                // *** End programmer edit section *** (Товар.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Товар.Наименование Set end)

                // *** End programmer edit section *** (Товар.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Производитель.
        /// </summary>
        // *** Start programmer edit section *** (Товар.Производитель CustomAttributes)

        // *** End programmer edit section *** (Товар.Производитель CustomAttributes)
        [StrLen(255)]
        public virtual string Производитель
        {
            get
            {
                // *** Start programmer edit section *** (Товар.Производитель Get start)

                // *** End programmer edit section *** (Товар.Производитель Get start)
                string result = this.fПроизводитель;
                // *** Start programmer edit section *** (Товар.Производитель Get end)

                // *** End programmer edit section *** (Товар.Производитель Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товар.Производитель Set start)

                // *** End programmer edit section *** (Товар.Производитель Set start)
                this.fПроизводитель = value;
                // *** Start programmer edit section *** (Товар.Производитель Set end)

                // *** End programmer edit section *** (Товар.Производитель Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТоварE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТоварE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТоварE", typeof(IIS.Bekap_4.Товар));
                }
            }
            
            /// <summary>
            /// "ТоварL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТоварL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТоварL", typeof(IIS.Bekap_4.Товар));
                }
            }
        }
    }
}
